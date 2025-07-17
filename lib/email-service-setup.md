# Email Service Setup Guide

## Option 1: Using Resend (Recommended)

1. Go to [resend.com](https://resend.com) and create an account
2. Get your API key
3. Add to your environment variables:
   \`\`\`
   RESEND_API_KEY=your_api_key_here
   \`\`\`

4. Update the contact action to use Resend:
   \`\`\`typescript
   const response = await fetch('https://api.resend.com/emails', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
     },
     body: JSON.stringify({
       from: 'Portfolio <noreply@yourdomain.com>',
       to: ['guizanisamar@ieee.org'],
       subject: `Portfolio Contact: ${subject}`,
       html: emailHtml,
       reply_to: email,
     }),
   })
   \`\`\`

## Option 2: Using EmailJS (Client-side)

1. Go to [emailjs.com](https://emailjs.com) and create an account
2. Set up a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and public key
5. Add EmailJS to your project and configure

## Option 3: Using Supabase Edge Functions

1. Create a Supabase Edge Function for sending emails
2. Use it with a service like Resend or SendGrid
3. Call the function from your contact form

## Current Setup

The current setup logs the email data to the console and saves to the database.
To make it actually send emails, choose one of the options above and implement it.

## Testing

You can test the contact form by:
1. Filling out the form
2. Checking the Supabase database for the saved message
3. Checking the console logs for the email data
4. Once you implement a real email service, test the actual email sending
