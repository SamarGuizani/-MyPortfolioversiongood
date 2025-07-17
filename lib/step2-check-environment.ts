// Step 2: Check if environment variables are properly set
export function checkEnvironmentVariables() {
  console.log("🔍 Checking Environment Variables:")

  const requiredVars = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }

  for (const [key, value] of Object.entries(requiredVars)) {
    if (value) {
      console.log(`✅ ${key}: ${key.includes("KEY") ? "[HIDDEN]" : value.substring(0, 20)}...`)
    } else {
      console.log(`❌ ${key}: NOT SET`)
    }
  }

  return requiredVars
}

// Test Supabase connection
export async function testSupabaseConnection() {
  try {
    const { createClient } = await import("@/lib/supabase")
    const supabase = createClient()

    const { data, error } = await supabase.from("contacts").select("count(*)").limit(1)

    if (error) {
      console.error("❌ Supabase connection failed:", error)
      return { success: false, error }
    }

    console.log("✅ Supabase connection successful")
    return { success: true, data }
  } catch (error) {
    console.error("❌ Supabase test failed:", error)
    return { success: false, error }
  }
}

// Test Resend API
export async function testResendAPI() {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Test <noreply@resend.dev>",
        to: ["guizanisamar@ieee.org"],
        subject: "🧪 API Test",
        html: "<h1>Test Email</h1><p>This is a test to verify the API works.</p>",
      }),
    })

    if (response.ok) {
      const result = await response.json()
      console.log("✅ Resend API test successful:", result)
      return { success: true, data: result }
    } else {
      const error = await response.text()
      console.error("❌ Resend API test failed:", error)
      return { success: false, error }
    }
  } catch (error) {
    console.error("❌ Resend API error:", error)
    return { success: false, error }
  }
}
