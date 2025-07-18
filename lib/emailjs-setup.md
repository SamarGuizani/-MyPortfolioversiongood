# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and create an account
2. Log in to your EmailJS dashboard

## Step 2: Create Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email service (Gmail, Outlook, etc.)
4. Follow the steps to connect your email account
5. Save the **Service ID** for later

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - {{to_name}} - Your name (will be "Samar Guizani")
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{subject}} - Email subject
   - {{message}} - The message content
4. Save the template and note the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Set Environment Variables
Create a `.env.local` file in your project root with these variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Form
1. Fill out the contact form
2. Check if the email is received
3. Verify the email formatting matches your template

## Troubleshooting
If emails are not being sent:
1. Check if all environment variables are set correctly
2. Verify the service is connected properly
3. Check browser console for any errors
4. Test the template directly in EmailJS dashboard

## Security Note
The EmailJS public key is safe to expose in client-side code. However:
- Don't share your User ID or any private keys
- Set up email sending limits in your EmailJS dashboard
- Consider adding CAPTCHA for production use 