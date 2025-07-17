// Alternative email service configuration
export const sendContactEmail = async (contactData: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  const emailContent = {
    to: "guizanisamar@ieee.org",
    subject: `Portfolio Contact: ${contactData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau Message Portfolio</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
              Détails du Contact
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 8px 0;"><strong style="color: #667eea;">Nom:</strong> ${contactData.name}</p>
              <p style="margin: 8px 0;"><strong style="color: #667eea;">Email:</strong> ${contactData.email}</p>
              <p style="margin: 8px 0;"><strong style="color: #667eea;">Sujet:</strong> ${contactData.subject}</p>
            </div>
            
            <div style="background: #f1f3f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${contactData.message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${contactData.email}" 
                 style="background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Répondre à ${contactData.name}
              </a>
            </div>
          </div>
          
          <p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
            Message envoyé depuis votre portfolio - ${new Date().toLocaleString("fr-FR")}
          </p>
        </div>
      </div>
    `,
  }

  // You can integrate with services like:
  // - EmailJS
  // - SendGrid
  // - Nodemailer
  // - Supabase Edge Functions
  // - Resend

  return emailContent
}
