# Contact Form - Formspree Integration

## Overview
The contact form in your portfolio is now powered by **Formspree**, a reliable form handling service that sends emails directly to your inbox without requiring a backend server.

## Features
✅ **Real-time form validation**
✅ **Spam protection** (honeypot field)
✅ **Email notifications** sent to anitus2006ajr@gmail.com
✅ **Success/error messaging**
✅ **Responsive design**
✅ **Accessibility compliant**

## How It Works

1. **User fills out the form** with their name, email, subject, and message
2. **Client-side validation** ensures all fields are properly filled
3. **Formspree processes** the form submission
4. **Email is sent** to your specified email address (anitus2006ajr@gmail.com)
5. **User sees confirmation** message on successful submission

## Form Configuration

**Formspree Form ID**: `mdkwvnrn`
**Endpoint**: `https://formspree.io/f/mdkwvnrn`
**Target Email**: anitus2006ajr@gmail.com

## Form Fields

- **Name** (required, min 2 characters)
- **Email** (required, valid email format)
- **Subject** (required, min 5 characters)  
- **Message** (required, min 10 characters)
- **Honeypot** (hidden spam protection field)

## Email Template
When someone submits the form, you'll receive an email with:
```
From: [User's Email]
Subject: [User's Subject]

Name: [User's Name]
Email: [User's Email]

Message:
[User's Message]
```

## Security Features

1. **Honeypot Protection**: Hidden field catches automated spam bots
2. **Client-side Validation**: Prevents invalid data submission
3. **Formspree Spam Filtering**: Built-in spam protection
4. **CORS Protection**: Only allows submissions from your domain

## Customization

To modify the form:

1. **Add/Remove Fields**: Update the form JSX in `/views/Contact/index.js`
2. **Change Validation**: Modify the `validateForm()` function
3. **Update Styling**: Edit `/styles/contact.scss`
4. **Change Email**: Update Formspree form settings on their dashboard

## Testing

To test the contact form:
1. Visit your portfolio at `http://localhost:3001`
2. Scroll to the Contact section
3. Fill out all required fields
4. Click "Send Message"
5. Check your email inbox for the submission

## Formspree Dashboard

Visit [Formspree Dashboard](https://formspree.io/forms) to:
- View form submissions
- Configure email templates  
- Set up custom thank you pages
- Monitor form analytics
- Manage spam protection settings

## Support

For issues with Formspree integration:
- Check the browser console for errors
- Verify the form ID is correct (`mdkwvnrn`)
- Ensure all required fields have proper `name` attributes
- Review Formspree documentation at https://formspree.io/docs