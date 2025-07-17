// Test function to verify email sending works
export async function testEmailSending() {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Test <noreply@resend.dev>",
        to: ["guizanisamar@ieee.org"],
        subject: "🧪 Portfolio Contact Form Test",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #14b8a6;">✅ Email Test Successful!</h1>
            <p>This is a test email to verify that your portfolio contact form is working correctly.</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Status:</strong> Email service is connected and working!</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              This test was sent from your portfolio contact form system.
            </p>
          </div>
        `,
      }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log("✅ Test email sent successfully:", result)
      return { success: true, data: result }
    } else {
      const error = await response.text()
      console.error("❌ Test email failed:", error)
      return { success: false, error }
    }
  } catch (error) {
    console.error("❌ Email test error:", error)
    return { success: false, error: error.message }
  }
}
