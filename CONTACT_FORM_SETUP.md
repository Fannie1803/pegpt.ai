# Contact Form Setup Guide

## Current Status

Your contact form is currently set up with a placeholder action URL:
```html
<form action="https://formspree.io/f/REPLACE_ME" method="POST">
```

To receive form submissions, you need to configure a form backend service. Here are the best options:

---

## Recommended Solutions

### Option 1: Formspree (Easiest - Recommended)

**Best for**: Quick setup, reliable service, free tier available

**Steps**:
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email (free account)
3. Create a new form project
4. Copy your unique form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. Replace `REPLACE_ME` in your HTML with your form ID

**Example**:
```html
<form action="https://formspree.io/f/xyzabc123" method="POST">
```

**Free Plan Includes**:
- 50 submissions per month
- Email notifications to your inbox
- Spam filtering
- File uploads
- Webhook support

**How you'll receive submissions**:
- Email notifications sent to your registered email address
- View all submissions in Formspree dashboard
- Export submissions as CSV

---

### Option 2: Web3Forms (100% Free)

**Best for**: Unlimited free submissions, no account required

**Steps**:
1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address to get an Access Key
3. Add the access key as a hidden field in your form

**Example**:
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR-ACCESS-KEY-HERE">
  <!-- rest of your form fields -->
</form>
```

**Free Plan Includes**:
- Unlimited submissions
- Email notifications
- No branding
- Spam protection with reCAPTCHA
- File attachments

**How you'll receive submissions**:
- Direct email notifications to your specified email
- No dashboard (email-only)

---

### Option 3: FormSubmit (No Registration Required)

**Best for**: Simplest setup, no account needed

**Steps**:
1. Just change the form action to: `https://formsubmit.co/YOUR-EMAIL@example.com`
2. Submit the form once to confirm your email
3. Done!

**Example**:
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

**Features**:
- No registration required
- Email notifications
- Customizable redirect
- Spam protection
- Free forever

**How you'll receive submissions**:
- Email notifications sent directly to the email in the action URL
- No dashboard

---

### Option 4: Netlify Forms (If hosting on Netlify)

**Best for**: If you deploy your site on Netlify

**Steps**:
1. Add `netlify` attribute to your form tag
2. Deploy to Netlify
3. Forms automatically work

**Example**:
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- your form fields -->
</form>
```

**Free Plan Includes**:
- 100 submissions per month
- Spam filtering
- Netlify dashboard access
- Email notifications

---

## Quick Setup Instructions (Formspree - Recommended)

### Step 1: Sign up for Formspree
1. Visit https://formspree.io
2. Click "Get Started" or "Sign Up"
3. Use your university/work email or personal email
4. Verify your email address

### Step 2: Create a Form
1. After logging in, click "New Form"
2. Give it a name (e.g., "PE-GPT Contact Form")
3. Copy your form endpoint (e.g., `https://formspree.io/f/xyzabc123`)

### Step 3: Update Your HTML
Replace this line in `index.html`:
```html
action="https://formspree.io/f/REPLACE_ME"
```

With your actual endpoint:
```html
action="https://formspree.io/f/xyzabc123"
```

### Step 4: Test
1. Upload your website
2. Fill out the contact form
3. Submit
4. Check your email inbox for the submission

---

## How You'll Receive Submissions

### Email Notifications
- You'll receive an email for each form submission
- Email includes all form fields (name, email, affiliation, interest areas, message)
- Emails come from the form service (e.g., notifications@formspree.io)

### Dashboard Access (Formspree, Netlify)
- Log in to view all submissions
- Filter and search submissions
- Export to CSV
- Mark as read/unread
- Archive old submissions

### Example Email You'll Receive:
```
Subject: New submission from PE-GPT Contact Form

Area of Interest: Educational collaboration
Affiliation: University of Arkansas
Name: John Doe
Email: john.doe@example.com
Message: Interested in integrating PE-GPT into our graduate course...
```

---

## Recommended Setup for PE-GPT

**I recommend Formspree** because:
1. Professional and reliable
2. Free tier is sufficient for your needs (50 submissions/month)
3. Has a dashboard to manage submissions
4. Good spam protection
5. Can integrate with email and other tools
6. Easy to upgrade if needed

**Alternative**: If you want completely free unlimited submissions, use **Web3Forms**.

---

## Current Form Configuration

Your form currently collects:
- ✅ Area of Interest (checkboxes)
- ✅ Affiliation/Organization
- ✅ Name
- ✅ Email
- ✅ Message (optional)
- ✅ Hidden field: source = "pe-gpt-website"

All fields are properly configured and will work with any of the above services.

---

## Need Help?

If you need assistance setting up the form backend, I can:
1. Help you choose the best service for your needs
2. Update the HTML with your form endpoint
3. Test the form to ensure it works
4. Set up email notifications

Just let me know which service you'd like to use!
