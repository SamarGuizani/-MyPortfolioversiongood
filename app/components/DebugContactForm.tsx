"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { debugContactForm } from "@/app/actions/step3-debug-contact"
import { AlertCircle, CheckCircle, Loader2, Bug } from "lucide-react"

export function DebugContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [debugResult, setDebugResult] = useState<any>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setDebugResult(null)

    try {
      const result = await debugContactForm(formData)
      setDebugResult(result)
      console.log("Debug result:", result)
    } catch (error) {
      setDebugResult({
        success: false,
        error: "Unexpected error",
        step: "client",
        details: error,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
      <CardHeader>
        <CardTitle className="text-orange-300 flex items-center gap-2">
          <Bug className="h-5 w-5" />
          Debug Contact Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        {debugResult && (
          <div
            className={`mb-6 p-4 rounded-lg border ${
              debugResult.success ? "bg-green-900/20 border-green-500/30" : "bg-red-900/20 border-red-500/30"
            }`}
          >
            <div className="flex items-start gap-3">
              {debugResult.success ? (
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
              )}
              <div>
                <p className={`font-semibold ${debugResult.success ? "text-green-300" : "text-red-300"}`}>
                  {debugResult.success ? "Success!" : "Error"}
                </p>
                <p className={`text-sm ${debugResult.success ? "text-green-400" : "text-red-400"}`}>
                  {debugResult.message || debugResult.error}
                </p>
                {debugResult.step && <p className="text-xs text-gray-400 mt-1">Step: {debugResult.step}</p>}
                {debugResult.details && (
                  <details className="mt-2">
                    <summary className="text-xs cursor-pointer text-gray-400">Technical Details</summary>
                    <pre className="text-xs mt-1 p-2 bg-black/20 rounded overflow-auto">
                      {JSON.stringify(debugResult.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="debug-name">Name</Label>
              <Input
                id="debug-name"
                name="name"
                placeholder="Test User"
                defaultValue="Debug Test"
                required
                className="bg-slate-800/50 border-orange-500/30 text-white"
              />
            </div>
            <div>
              <Label htmlFor="debug-email">Email</Label>
              <Input
                id="debug-email"
                name="email"
                type="email"
                placeholder="test@gmail.com"
                defaultValue="test@gmail.com"
                required
                className="bg-slate-800/50 border-orange-500/30 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="debug-subject">Subject</Label>
            <Input
              id="debug-subject"
              name="subject"
              placeholder="Debug Test"
              defaultValue="Contact Form Debug Test"
              required
              className="bg-slate-800/50 border-orange-500/30 text-white"
            />
          </div>

          <div>
            <Label htmlFor="debug-message">Message</Label>
            <Textarea
              id="debug-message"
              name="message"
              placeholder="Debug message"
              defaultValue="This is a debug test to identify and fix contact form issues."
              required
              rows={3}
              className="bg-slate-800/50 border-orange-500/30 text-white"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Running Debug Test...
              </>
            ) : (
              <>
                <Bug className="mr-2 h-4 w-4" />
                Run Debug Test
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
