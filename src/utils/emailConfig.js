// EmailJS Configuration
// To set up EmailJS for your contact form:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with variables: {{name}}, {{email}}, {{message}}
// 4. Get your credentials and replace the placeholders below

export const emailConfig = {
  // Replace with your EmailJS service ID
  serviceId: 'service_your_service_id',
  
  // Replace with your EmailJS template ID
  templateId: 'template_your_template_id',
  
  // Replace with your EmailJS public key
  publicKey: 'your_public_key'
};

// Example EmailJS Template:
/*
Subject: New Contact Form Submission from {{name}}

Name: {{name}}
Email: {{email}}
Message: {{message}}

This is a new contact form submission from your portfolio website.
*/

// To use this configuration:
// 1. Replace the placeholder values with your actual EmailJS credentials
// 2. Update the footer.jsx file to import and use these values
// 3. Test the contact form to ensure emails are being sent

export default emailConfig; 