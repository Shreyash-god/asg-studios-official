# ASG Studios Domain & DNS Configuration Guide

## Current Status

✅ **Website Deployed**: The website is live and working at https://asg-studios-official.vercel.app/

⚠️ **Custom Domain**: asgstudios.online needs DNS configuration to point to Vercel

## Domain Information

- **Domain**: asgstudios.online
- **Registrar**: GoDaddy
- **Current Nameservers**: dns1-4.p02.nsone.net (Netlify)
- **Status**: Invalid Configuration (DNS not pointing to Vercel)

## Step-by-Step DNS Setup (GoDaddy)

Follow these steps to connect your domain to Vercel:

### Option 1: Change Nameservers to Vercel (RECOMMENDED)

This is the cleanest approach and recommended for production.

#### Step 1: Log into GoDaddy
1. Go to https://www.godaddy.com
2. Sign in with your account
3. Click "My Products"
4. Find "asgstudios.online" and click on it

#### Step 2: Access DNS Settings
1. Click "Manage DNS" button
2. Scroll down to the "Nameservers" section
3. Click "Change Nameservers"

#### Step 3: Update to Vercel Nameservers
1. Replace all existing nameservers with these Vercel nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

2. Delete any other nameservers listed (Netlify DNS records)
3. Click "Save"

#### Step 4: Wait for Propagation
- Nameserver changes can take 24-48 hours to fully propagate
- You can check status at: https://vercel.com/shreyash-gods-projects/asg-studios-official/settings/domains
- Once propagated, the domain status will change from "Invalid Configuration" to "Valid Configuration"

---

### Option 2: Use DNS Records at GoDaddy (ALTERNATIVE)

If you want to keep GoDaddy as your DNS provider:

#### Step 1: Go to GoDaddy DNS Manager
1. Log in to GoDaddy
2. Click "My Products"
3. Find "asgstudios.online" and click "Manage DNS"

#### Step 2: Update A Record
1. Find the "A" record pointing to "@" (root)
2. Change the value to: `216.198.79.1`
3. Set TTL to 3600 (1 hour)
4. Save changes

#### Step 3: Add or Update CNAME Record
1. Add a new "CNAME" record
2. Name: `www`
3. Value: `66f6d54829d61ad9.vercel-dns-017.com.`
4. TTL: 3600
5. Save changes

#### Step 4: Verify
- Wait 15-30 minutes for DNS propagation
- Check at: https://vercel.com/shreyash-gods-projects/asg-studios-official/settings/domains

---

## Verification Checklist

After configuring DNS, verify the following:

- [ ] Visit https://asgstudios.online/ in your browser
- [ ] Website loads without errors (not a black screen)
- [ ] "ASG Studios" logo and watermark are visible
- [ ] Watermark rotates smoothly
- [ ] Page title shows "ASG Studios - Premium Digital Experience"
- [ ] Footer shows copyright with Shreyash Ghosh's name
- [ ] HTTPS certificate is valid (green lock icon)
- [ ] No mixed content warnings

## Testing Your DNS

You can test DNS configuration using these tools:

### Using nslookup (Windows/Mac/Linux)
```bash
# Test apex domain A record
nslookup asgstudios.online

# Should return: 216.198.79.1 (or Vercel IP)
```

### Using dig (Mac/Linux)
```bash
# Test A record
dig asgstudios.online

# Test www subdomain CNAME
dig www.asgstudios.online
```

### Online Tools
- https://dnschecker.org/ - Check DNS propagation
- https://www.nslookup.io/ - Quick DNS lookup
- https://who.is/dns/asgstudios.online - Full DNS record lookup

## Troubleshooting

### Site Still Shows Black Screen
- **Cause**: DNS has not yet propagated
- **Solution**: Wait 24-48 hours, then refresh browser cache (Ctrl+Shift+Delete)
- **Alternative**: Clear browser cookies and try incognito mode

### DNS Shows as "Invalid Configuration"
- **Cause**: Nameservers haven't updated or records are incorrect
- **Solution**: 
  1. Verify nameservers are correctly set in GoDaddy
  2. Use the DNS Record option instead if nameserver change fails
  3. Check A record is 216.198.79.1
  4. Check CNAME record includes the trailing dot: `66f6d54829d61ad9.vercel-dns-017.com.`

### "This site can't be reached" Error
- **Cause**: Domain DNS is not resolving
- **Solution**: 
  1. Check GoDaddy DNS settings are saved correctly
  2. Try accessing via https://asg-studios-official.vercel.app/ (temporary domain)
  3. Wait longer for DNS propagation

### HTTPS Certificate Error
- **Cause**: SSL certificate not yet issued
- **Solution**: Vercel automatically provisions certs when domain is verified; wait 30-60 minutes

## Environment Variables (Already Set in Vercel)

The following are configured in Vercel project settings:
- `ADMIN_PASSWORD` - Admin authentication
- `JWT_SECRET` - JWT token secret
- `NEXT_PUBLIC_UPLOAD_ENDPOINT` - Image upload API endpoint

## Deployed Application Structure

```
https://asgstudios.online
├── / (Home page with logo and watermark)
├── /admin (Protected admin upload panel)
└── /api/upload (Image upload endpoint)
```

## Support & Additional Resources

- **GitHub Repository**: https://github.com/Shreyash-god/asg-studios-official
- **Vercel Dashboard**: https://vercel.com/shreyash-gods-projects/asg-studios-official
- **Vercel Domain Docs**: https://vercel.com/docs/domains
- **GoDaddy Help**: https://www.godaddy.com/help

---

**Last Updated**: January 2026
**Status**: Production Ready
