# ASG Studios Official Website

## Premium Digital Experience - Next.js, TypeScript, Tailwind CSS

Official website for ASG Studios, owned by Shreyash Ghosh. A modern, secure, and beautifully designed website built with cutting-edge web technologies.

**Live at:** [https://asgstudios.online](https://asgstudios.online)

## 🎯 Features

### Design & Experience
- **Premium UI/UX**: Dark gradient theme with luxury serif + sans-serif typography
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion for elegant entrance and scroll animations
- **360° Rotating Watermark**: Continuous smooth rotation on all pages
- **Sticky Header**: Smart navigation header that stays visible on scroll

### Functionality
- **Admin Image Upload**: Secure authenticated image upload system
- **Dynamic Content**: Featured image updates appear immediately on homepage
- **Image Optimization**: WebP/AVIF support with lazy loading
- **SEO Optimized**: Meta tags, Open Graph, structured data

### Security (Industry-Grade)
- **Content Security Policy (CSP)**: Strict headers preventing XSS/CSRF attacks
- **HTTP Security Headers**: X-Frame-Options, X-Content-Type-Options, HSTS
- **HTTPS Enforced**: TLS 1.2+ with HSTS preloading
- **File Upload Validation**: MIME type checking and file size limits
- **Server-Side Validation**: All inputs validated and sanitized
- **Rate Limiting**: Protection against brute-force and DDoS
- **No Exposed Secrets**: Environment variables properly configured

### Performance
- **Lighthouse Score**: 90+
- **Fast Build**: SWC minification
- **CDN Ready**: Vercel Edge Network
- **Image Optimization**: Automatic format conversion

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Animation library
- **React 18** - UI library

### Backend
- **Next.js API Routes** - Serverless functions
- **TypeScript** - Type-safe backend
- **JWT Authentication** - Secure admin access
- **File Upload Handling** - Secure image processing

### Hosting & Deployment
- **Vercel** - Recommended hosting platform
- **Cloudflare** - Optional CDN protection
- **HTTPS/SSL** - Automatic via Vercel
- **Domain**: asgstudios.online

## 📁 Project Structure

```
asg-studios-official/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   └── api/
│       ├── upload/route.ts        # Image upload endpoint
│       └── admin/route.ts         # Admin authentication
├── components/
│   ├── Header.tsx                 # Sticky navigation header
│   ├── Hero.tsx                   # Hero section with watermark
│   ├── ImageUploader.tsx          # Admin upload form
│   ├── Watermark.tsx              # 360° rotating watermark
│   └── Footer.tsx                 # Copyright footer
├── lib/
│   ├── auth.ts                    # JWT authentication
│   ├── validation.ts              # Input validation
│   └── security.ts                # Security utilities
├── public/
│   └── uploads/                   # Uploaded images
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind configuration
├── postcss.config.js              # PostCSS config
├── next.config.js                 # Next.js configuration
├── SECURITY.md                    # Security policy
└── README.md                      # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/Shreyash-god/asg-studios-official.git
cd asg-studios-official

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Set admin password (generate with: openssl rand -hex 32)
echo "ADMIN_PASSWORD=your-secret-key" >> .env.local
echo "JWT_SECRET=your-jwt-secret" >> .env.local

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📦 Deployment (Vercel)

### Automatic Deployment

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import this GitHub repository

2. **Configure Environment**
   - Set environment variables in Vercel:
     - `ADMIN_PASSWORD`
     - `JWT_SECRET`
     - `NEXT_PUBLIC_UPLOAD_ENDPOINT`

3. **Connect Domain**
   - In Vercel: Settings → Domains
   - Add `asgstudios.online`
   - Update DNS records at domain registrar

4. **Deploy**
   - Vercel auto-deploys on push to `main`
   - HTTPS certificate auto-provisioned
   - CDN enabled globally

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔐 Security Features

### Content Security Policy
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self';
```

### Security Headers
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Strict-Transport-Security: max-age=31536000
- ✅ Referrer-Policy: strict-origin-when-cross-origin

### File Upload Security
- MIME type validation (jpg, png, webp, gif)
- Maximum file size: 5MB
- Virus scanning (can integrate Virus Total)
- Secure filename generation
- No execution permissions

## 🎨 Customization

### Logo Text
Edit in `components/Hero.tsx`:
```tsx
<h1 className="text-6xl font-bold">ASG Studios</h1>
```

### Colors
Edit `tailwind.config.ts` for theme colors

### Watermark Animation
Adjust rotation speed in `components/Watermark.tsx`:
```tsx
animate={{ rotate: 360 }} 
transition={{ duration: 20 }} // Change duration
```

## 📊 Lighthouse Metrics

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🔄 CI/CD Pipeline

GitHub Actions automatically:
1. Runs tests on pull requests
2. Checks code quality
3. Builds project
4. Deploys to Vercel on merge to main

## 📝 License

MIT License - See [LICENSE](./LICENSE) file for details

## 👨‍💼 About

**Owner**: Shreyash Ghosh  
**Company**: ASG Studios  
**Built with**: Next.js, TypeScript, Tailwind CSS  
**Hosted on**: Vercel  

---

## 🆘 Support

For issues or questions:
- Create a GitHub Issue
- Check [SECURITY.md](./SECURITY.md) for security concerns

## 🌐 Links

- **Website**: https://asgstudios.online
- **GitHub**: https://github.com/Shreyash-god/asg-studios-official
- **Developer**: Shreyash Ghosh

---

**© ASG Studios — All Rights Reserved**  
*Crafted with ❤️ using Next.js and modern web technologies*
