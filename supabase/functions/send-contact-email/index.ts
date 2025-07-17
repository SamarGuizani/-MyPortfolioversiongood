import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Deno } from "https://deno.land/std@0.168.0/node/global.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { to, subject, name, email, message } = await req.json()

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
              Contact Details
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 8px 0;"><strong style="color: #667eea;">Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong style="color: #667eea;">Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong style="color: #667eea;">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: #f1f3f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" 
                 style="background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
          </div>
          
          <p style="text-align: center; color: #666; font-size: 12px; margin-top: 20px;">
            Message sent from your portfolio - ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <noreply@yourdomain.com>",
        to: [to],
        subject: subject,
        html: emailHtml,
        reply_to: email,
      }),
    })

    if (res.ok) {
      const data = await res.json()
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      })
    } else {
      const error = await res.text()
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
})
