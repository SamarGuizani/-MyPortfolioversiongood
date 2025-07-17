"use server"

// Simplified contact form without complex validation
export async function simpleContactSubmit(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  console.log("📝 Simple contact form data:", { name, email, subject })

  // Basic validation only
  if (!name || !email || !subject || !message) {
    return { success: false, error: "Please fill all fields" }
  }

  // Try just the email sending without database
  try {
    const emailHtml = `
      <h2>New Contact from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; margin: 10px 0;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <hr>
      <p style="color: #666; font-size: 12px;">
        Sent from portfolio on ${new Date().toLocaleString()}
      </p>
    `

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <noreply@resend.dev>",
        to: ["guizanisamar@ieee.org"],
        subject: `Portfolio Contact: ${subject}`,
        html: emailHtml,
        reply_to: email,
      }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log("✅ Email sent:", result)
      return {
        success: true,
        message: "Email sent successfully to guizanisamar@ieee.org!",
      }
    } else {
      const error = await response.text()
      console.error("❌ Email failed:", error)
      return {
        success: false,
        error: `Email service error: ${response.status}`,
      }
    }
  } catch (error) {
    console.error("❌ Network error:", error)
    return {
      success: false,
      error: "Network error - check your connection",
    }
  }
}
