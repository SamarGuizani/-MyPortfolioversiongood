"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_7oay66r"
const EMAILJS_TEMPLATE_ID = "template_8vn6lk9" // Updated to the correct template ID
const EMAILJS_PUBLIC_KEY = "s34WqnAPaB0o5fyBH"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [successMessage, setSuccessMessage] = useState("")
  const { toast } = useToast()

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      console.log("EmailJS initialized successfully")
    } catch (error) {
      console.error("EmailJS initialization error:", error)
    }
  }, [])

  const validateEmail = (email: string): boolean => {
    const allowedDomains = [
      "@gmail.com",
      "@ieee.org",
      "@delice.com.tn",
      "@outlook.com",
      "@hotmail.com",
      "@yahoo.com",
      "@protonmail.com",
    ]

    // Basic email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(email)) {
      return false
    }

    // Check if email ends with allowed domains
    const isAllowedDomain = allowedDomains.some((domain) => email.toLowerCase().endsWith(domain))

    // Or check if it's a valid domain format (letters/numbers + @ + domain + .extension)
    const hasValidFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|tn|fr|de|uk|ca|au)$/i.test(email)

    return isAllowedDomain || hasValidFormat
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    if (email && !validateEmail(email)) {
      setEmailError("Please use a valid email address (gmail.com, ieee.org, delice.com.tn, etc.)")
    } else {
      setEmailError("")
    }
  }

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!validateEmail(email)) {
      setEmailError("Please use a valid email address")
      return
    }

    setIsSubmitting(true)
    setEmailError("")
    setSubmitStatus("idle")

    try {
      console.log("Preparing to send email with EmailJS...")
      
      // Updated template parameters to match exactly with your template variables
      const templateParams = {
        // Variables for the first section
        name: name,
        time: new Date().toLocaleString(),
        message: message,
        
        // Variables for the second section
        from_name: name,
        from_email: email,
        subject: subject,
        
        // Additional email settings
        reply_to: email,
      }

      console.log("Sending with parameters:", templateParams)

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      console.log("EmailJS Response:", result)

      if (result.status === 200) {
        setSubmitStatus("success")
        setSuccessMessage(`Message sent successfully! We'll reply to you at ${email}`)

        toast({
          title: "✅ Message Sent Successfully!",
          description: `Your message has been sent! We'll reply to ${email}`,
        })

        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()

        // Reset status after 8 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
          setSuccessMessage("")
        }, 8000)
      } else {
        throw new Error(`Failed to send email. Status: ${result.status}`)
      }
    } catch (error) {
      console.error('Email sending error:', error)
      setSubmitStatus("error")
      toast({
        title: "❌ Failed to Send Message",
        description: error instanceof Error ? error.message : "Please try again or email me directly at guizanisamar@ieee.org",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gradient-to-br from-teal-500/10 to-purple-500/10 border-teal-500/20 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-teal-300 flex items-center justify-center gap-2">
          <Mail className="h-6 w-6" />
          Contact Me
        </CardTitle>
        <CardDescription className="text-gray-400">
          Send me a message and I'll reply directly to your email
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-start gap-3 animate-fade-in">
            <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-green-300 font-semibold">Message Sent Successfully! 🎉</p>
              <p className="text-green-400/90 text-sm mt-1">{successMessage}</p>
              <p className="text-green-500/80 text-xs mt-2">📧 Check your email for my reply soon!</p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-start gap-3 animate-fade-in">
            <AlertCircle className="h-6 w-6 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-300 font-semibold">Failed to Send Message</p>
              <p className="text-red-400/90 text-sm mt-1">Please try again or email me directly at:</p>
              <a
                href="mailto:guizanisamar@ieee.org"
                className="text-red-300 hover:text-red-200 underline text-sm font-medium"
              >
                guizanisamar@ieee.org
              </a>
            </div>
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-teal-300 flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                required
                disabled={isSubmitting}
                className="bg-slate-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400 disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-300 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
                onChange={handleEmailChange}
                className={`bg-slate-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400 disabled:opacity-50 ${
                  emailError ? "border-red-500" : ""
                }`}
              />
              {emailError && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {emailError}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-purple-300">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
              disabled={isSubmitting}
              className="bg-slate-800/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-teal-300 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Your Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, question, or opportunity..."
              required
              rows={5}
              disabled={isSubmitting}
              className="bg-slate-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400 resize-none disabled:opacity-50"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !!emailError}
            className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 text-white disabled:opacity-50 transition-all duration-300 h-12 text-base font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>

          <div className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-teal-400" />
              <span className="text-sm text-gray-300">Your message will be sent directly to:</span>
            </div>
            <p className="text-teal-300 font-semibold text-base">guizanisamar@ieee.org</p>
            <p className="text-xs text-gray-400 mt-1">I typically reply within 24 hours</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
