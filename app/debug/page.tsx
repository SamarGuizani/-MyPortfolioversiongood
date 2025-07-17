import { DebugContactForm } from "@/app/components/DebugContactForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Database, Mail, Settings } from "lucide-react"

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-300 mb-2">🔧 Contact Form Debug Center</h1>
          <p className="text-gray-400">Let's diagnose and fix your contact form step by step</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-blue-300 flex items-center gap-2">
                <Database className="h-5 w-5" />
                Step 1: Database Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-3">
                First, let's verify your Supabase database is working correctly.
              </p>
              <div className="bg-slate-800/50 p-3 rounded text-xs font-mono">Run: scripts/step1-check-database.sql</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-300 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Step 2: Environment Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-3">Check if all environment variables are properly configured.</p>
              <div className="bg-slate-800/50 p-3 rounded text-xs">
                <div>✅ NEXT_PUBLIC_SUPABASE_URL</div>
                <div>✅ NEXT_PUBLIC_SUPABASE_ANON_KEY</div>
                <div>✅ RESEND_API_KEY</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-300 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Step 3: Email Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-3">Test if Resend API is working and can send emails.</p>
              <div className="bg-slate-800/50 p-3 rounded text-xs">Target: guizanisamar@ieee.org</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <CardHeader>
              <CardTitle className="text-orange-300 flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Step 4: Full Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-3">Run a complete end-to-end test with detailed debugging.</p>
              <div className="bg-slate-800/50 p-3 rounded text-xs">Use the debug form below ↓</div>
            </CardContent>
          </Card>
        </div>

        <DebugContactForm />

        <Card className="mt-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="text-yellow-300">📋 Troubleshooting Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Database table 'contacts' exists and is accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Supabase environment variables are set correctly</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>RESEND_API_KEY is valid and active</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Email validation allows your test email domain</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>No network/firewall blocking API requests</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
