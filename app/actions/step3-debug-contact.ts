"use server"

import { createClient } from "@/lib/supabase"

export async function debugContactForm(formData: FormData) {
  console.log("🔍 DEBUG: Starting contact form submission")

  // Step 1: Extract and validate form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  console.log("📝 Form data received:", { name, email, subject, messageLength: message?.length })

  if (!name || !email || !subject || !message) {
    console.log("❌ Missing required fields")
    return { success: false, error: "All fields are required", step: "validation" }
  }

  // Step 2: Test database connection
  console.log("🗄️ Testing database connection...")
  try {
    const supabase = createClient()

    // Test basic connection
    const { data: testData, error: testError } = await supabase.from("contacts").select("count(*)").limit(1)

    if (testError) {
      console.error("❌ Database connection failed:", testError)
      return { success: false, error: "Database connection failed", step: "database", details: testError }
    }

    console.log("✅ Database connection successful")

    // Step 3: Try to insert the contact
    console.log("💾 Attempting to save contact...")
    const { data: insertData, error: insertError } = await supabase
      .from("contacts")
      .insert([{ name, email, subject, message }])
      .select()

    if (insertError) {
      console.error("❌ Database insert failed:", insertError)
      return { success: false, error: "Failed to save contact", step: "insert", details: insertError }
    }

    console.log("✅ Contact saved successfully:", insertData)
  } catch (dbError) {
    console.error("❌ Database error:", dbError)
    return { success: false, error: "Database error", step: "database", details: dbError }
  }

  // Step 4: Test email sending
  console.log("📧 Testing email sending...")

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ RESEND_API_KEY not found")
    return { success: false, error: "Email service not configured", step: "email_config" }
  }

  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #14b8a6;">📧 New Portfolio Contact</h1>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">Sent from portfolio at ${new Date().toLocaleString()}</p>
      </div>
    `

    console.log("🚀 Sending email to Resend API...")
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <noreply@resend.dev>",
        to: ["guizanisamar@ieee.org"],
        subject: `Portfolio: ${subject}`,
        html: emailHtml,
        reply_to: email,
      }),
    })

    console.log("📬 Email API response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("❌ Email API error:", errorText)
      return {
        success: false,
        error: "Email sending failed",
        step: "email_send",
        details: { status: response.status, error: errorText },
      }
    }

    const emailResult = await response.json()
    console.log("✅ Email sent successfully:", emailResult)

    return {
      success: true,
      message: "Message sent successfully to guizanisamar@ieee.org!",
      step: "complete",
      details: { emailId: emailResult.id },
    }
  } catch (emailError) {
    console.error("❌ Email sending error:", emailError)
    return {
      success: false,
      error: "Email service error",
      step: "email_send",
      details: emailError,
    }
  }
}
