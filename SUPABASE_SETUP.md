# Supabase Authentication Setup Guide

This guide explains how to set up Supabase authentication for the Burai Live website.

## 🎯 Why Supabase?

- **Free tier**: 50,000 monthly active users
- **Secure**: Industry-standard password hashing (bcrypt)
- **Email verification**: Built-in email confirmation
- **MFA support**: Multi-factor authentication ready
- **OAuth providers**: Google, GitHub, etc.
- **No lock-in**: Open source, can self-host

## 📋 Prerequisites

- A Supabase account (free at [supabase.com](https://supabase.com))
- This Jekyll site deployed or running locally

## 🚀 Step-by-Step Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in the details:
   - **Project Name**: `burai-live-auth` (or any name)
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to Japan (e.g., Northeast Asia - Tokyo)
4. Click "Create new project" (takes ~2 minutes)

### 2. Get Your API Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbG...` (long string)

### 3. Configure Your Jekyll Site

Open the file `assets/js/supabase-config.js` and replace the placeholder values:

```javascript
const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co'; // Your Project URL
const SUPABASE_ANON_KEY = 'eyJhbG...'; // Your anon public key
```

**Important**: For production, use environment variables or a build-time configuration system instead of hardcoding credentials.

### 4. Configure Email Templates (Optional but Recommended)

1. In Supabase dashboard, go to **Authentication** → **Email Templates**
2. Customize the templates for:
   - **Confirm signup**: Welcome email with verification link
   - **Magic Link**: Passwordless login
   - **Reset Password**: Password reset email

Update the redirect URLs to match your domain:
```
Confirm signup redirect: https://burai.live/members/
Password reset redirect: https://burai.live/reset-password/
```

### 5. Configure Site URL

1. Go to **Authentication** → **URL Configuration**
2. Set **Site URL**: `https://burai.live` (or your domain)
3. Add **Redirect URLs**:
   ```
   https://burai.live/**
   http://localhost:4000/**  (for local development)
   ```

### 6. Enable Email Provider

1. Go to **Authentication** → **Providers**
2. Ensure **Email** is enabled (it should be by default)
3. Optional: Configure SMTP settings for custom email sending
   - By default, Supabase sends 3 emails/hour in free tier
   - For production, configure your own SMTP (recommended)

### 7. Test Authentication

1. Rebuild your Jekyll site: `bundle exec jekyll serve`
2. Visit the signup page: `http://localhost:4000/signup/`
3. Create a test account with your email
4. Check your email for the confirmation link
5. Click the link to verify your account
6. Try logging in at `http://localhost:4000/signin/`

### 8. Configure Row Level Security (Optional)

If you plan to store user data in Supabase database:

1. Go to **Table Editor** and create tables for your data
2. Enable **Row Level Security (RLS)** on sensitive tables
3. Create policies to control data access

Example policy for user-specific data:
```sql
-- Users can only read their own data
CREATE POLICY "Users can view own data"
ON your_table FOR SELECT
USING (auth.uid() = user_id);

-- Users can only insert their own data
CREATE POLICY "Users can insert own data"
ON your_table FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

## 🔐 Security Best Practices

### 1. Use Environment Variables (Production)

Instead of hardcoding in `supabase-config.js`, use environment variables:

**For Netlify:**
```bash
# In Netlify dashboard: Site settings → Environment variables
SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbG...
```

**For GitHub Pages with Actions:**
```yaml
# .github/workflows/deploy.yml
- name: Build site
  env:
    SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
    SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
  run: |
    # Use sed or similar to replace placeholders
    sed -i "s|YOUR_SUPABASE_PROJECT_URL|$SUPABASE_URL|g" assets/js/supabase-config.js
    sed -i "s|YOUR_SUPABASE_ANON_KEY|$SUPABASE_ANON_KEY|g" assets/js/supabase-config.js
    bundle exec jekyll build
```

### 2. Enable MFA (Multi-Factor Authentication)

1. In Supabase dashboard: **Authentication** → **Providers**
2. Enable **Phone** provider for SMS-based MFA
3. Users can enable MFA in their account settings

### 3. Set Password Policy

1. Go to **Authentication** → **Policies**
2. Configure minimum password requirements:
   - Minimum length: 8 characters (default is 6)
   - Require special characters
   - Require numbers

### 4. Monitor Authentication Events

1. Go to **Authentication** → **Users**
2. Monitor sign-ups and login activity
3. Set up alerts for suspicious activity

## 🌐 Production Deployment

### For GitHub Pages:

1. Use GitHub Secrets for credentials
2. Update the build workflow to inject credentials
3. Ensure Site URL in Supabase matches your domain

### For Netlify:

1. Set environment variables in Netlify dashboard
2. Update `netlify.toml` if needed
3. Redeploy the site

### For Vercel:

1. Add environment variables in project settings
2. Redeploy

## 🔧 Advanced Features

### OAuth Providers (Google, GitHub, etc.)

1. In Supabase: **Authentication** → **Providers**
2. Enable provider (e.g., Google)
3. Configure OAuth credentials from Google Cloud Console
4. Update your signin page to include OAuth buttons

Example code:
```javascript
// Sign in with Google
async function signInWithGoogle() {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/members/'
    }
  });
}
```

### Magic Link (Passwordless Login)

```javascript
async function sendMagicLink(email) {
  const { data, error } = await supabaseClient.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: window.location.origin + '/members/'
    }
  });
}
```

### Password Reset

Create a reset password page and use:
```javascript
async function resetPassword(email) {
  const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '/reset-password/'
  });
}
```

## 📊 Monitoring and Analytics

1. **User Dashboard**: View all users in **Authentication** → **Users**
2. **Activity Logs**: Check login/signup activity
3. **Database Usage**: Monitor in **Database** → **Usage**
4. **API Logs**: View in **Logs** section

## 💡 Troubleshooting

### "Invalid API credentials"
- Double-check that you copied the correct URL and key
- Ensure no extra spaces in the credentials

### "Email not confirmed"
- Check spam/junk folder for confirmation email
- In Supabase: **Authentication** → **Users** → manually confirm user

### "Redirect URL not allowed"
- Add your URL to allowed redirect URLs in Supabase settings
- Include both production and development URLs

### Console errors about CORS
- Ensure Site URL is set correctly in Supabase
- Check that redirect URLs are properly configured

## 🆓 Free Tier Limits

Supabase free tier includes:
- ✅ 50,000 monthly active users
- ✅ 500 MB database storage
- ✅ 1 GB file storage
- ✅ 2 GB bandwidth
- ⚠️ Projects paused after 1 week of inactivity (easy to restore)

For most small businesses, the free tier is sufficient!

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth API](https://supabase.com/docs/reference/javascript/auth-signup)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Email Templates](https://supabase.com/docs/guides/auth/auth-email-templates)

## 🤝 Support

For issues with this implementation, please open an issue on the GitHub repository.

For Supabase-specific questions, visit:
- [Supabase Discord](https://discord.supabase.com/)
- [Supabase GitHub Discussions](https://github.com/supabase/supabase/discussions)

---

**Note**: The site works in demo mode without Supabase configuration, but it's not secure for production use. Always configure Supabase for production deployments.
