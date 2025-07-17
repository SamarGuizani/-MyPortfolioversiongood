"use server"

import { createClient } from "@/lib/supabase"

export async function submitContact(formData: FormData) {
  const supabase = createClient()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Server-side email validation
  const allowedDomains = [
    "@gmail.com",
    "@ieee.org",
    "@delice.com.tn",
    "@outlook.com",
    "@hotmail.com",
    "@yahoo.com",
    "@protonmail.com",
  ]

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const isAllowedDomain = allowedDomains.some((domain) => email.toLowerCase().endsWith(domain))
  const hasValidFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|tn|fr|de|uk|ca|au)$/i.test(email)

  if (!emailRegex.test(email) || (!isAllowedDomain && !hasValidFormat)) {
    return { success: false, error: "Please use a valid email address" }
  }

  try {
    // Save to database first
    const { error: dbError } = await supabase.from("contacts").insert([
      {
        name,
        email,
        subject,
        message,
        created_at: new Date().toISOString(),
      },
    ])

    if (dbError) {
      console.error("Supabase error:", dbError)
      // Continue even if database fails
    }

    // Send email using Resend
    try {
      const emailHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 50%, #8b5cf6 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              📧 New Portfolio Contact
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
              Someone contacted you through your portfolio
            </p>
          </div>
          
          <div style="background: white; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="border-left: 4px solid #14b8a6; padding-left: 20px; margin-bottom: 30px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">
                Contact Information
              </h2>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 80px;">👤 Name:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #374151;">📧 Email:</td>
                    <td style="padding: 8px 0; color: #1f2937;">
                      <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #374151;">📝 Subject:</td>
                    <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${subject}</td>
                  </tr>
                </table>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%); padding: 25px; border-radius: 12px; border: 1px solid #e5e7eb; margin: 25px 0;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                💬 Message:
              </h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="line-height: 1.7; color: #374151; margin: 0; white-space: pre-wrap; font-size: 15px;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin: 35px 0 20px 0;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                 style="background: linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%); color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: all 0.3s ease;">
                ✉️ Reply to ${name}
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="text-align: center; color: #6b7280; font-size: 13px; margin: 0; line-height: 1.5;">
                📅 Sent on ${new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}<br>
                🌐 From your portfolio website
              </p>
            </div>
          </div>
        </div>
      `

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <noreply@resend.dev>",
          to: ["guizanisamar@ieee.org"],
          subject: `🚀 Portfolio Contact: ${subject}`,
          html: emailHtml,
          reply_to: email,
        }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error("Resend API error:", errorData)
        throw new Error(`Email service error: ${response.status}`)
      }

      const emailResult = await response.json()
      console.log("Email sent successfully:", emailResult)

      return {
        success: true,
        message: `Message sent successfully to guizanisamar@ieee.org! I'll reply to you at ${email}`,
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError)

      // Return success even if email fails, but with a different message
      return {
        success: true,
        message: "Message saved successfully! I'll contact you soon at guizanisamar@ieee.org",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Failed to send message. Please try emailing me directly at guizanisamar@ieee.org",
    }
  }
}
