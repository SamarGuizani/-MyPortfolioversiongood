"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <form action={action} className="bg-gray-800 p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
          placeholder="Subject"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
          placeholder="Your Message"
        ></textarea>
      </div>

      {state && (
        <div
          className={`mb-4 p-3 rounded-md ${
            state.success
              ? "bg-green-900/50 border border-green-500 text-green-300"
              : "bg-red-900/50 border border-red-500 text-red-300"
          }`}
        >
          {state.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
