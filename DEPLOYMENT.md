# Deployment Guide for R18 AI LABS Website

## Quick Start Deployment

### Option 1: Vercel (Recommended - 2 minutes)

Vercel is the easiest way to deploy Next.js applications with zero-config setup.

**Steps:**

1. **Create GitHub Repository** (if not already)
   ```bash
   cd E:\r18ailabs\untitled
   git config --global user.email "you@example.com"
   git config --global user.name "Your Name"
   git add .
   git commit -m "Initial commit: R18 AI LABS website"
   git branch -M main
   git remote add origin https://github.com/yourusername/r18-ai-labs.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com/new)
   - Click "Continue with GitHub"
   - Select your repository
   - Vercel auto-detects Next.js (no config needed)
   - Click "Deploy"
   - Your site will be live at `r18-ai-labs.vercel.app`

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `r18ailabs.com`
   - Follow DNS configuration instructions
   - Wait 24-48 hours for propagation

**Pro Features:**
- ✅ Automatic deployments on git push
- ✅ Preview URLs for pull requests
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Edge functions ready

---

### Option 2: AWS Amplify

**Requirements:**
- AWS Account
- GitHub repository

**Steps:**

1. **Connect Repository**
   ```bash
   # Push to GitHub (see Option 1 steps 1-2)
   ```

2. **Create Amplify App**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app"
   - Select "Host web app"
   - Choose "GitHub"
   - Authorize and select repository
   - Select `main` branch
   - Accept default build settings
   - Click "Deploy"

3. **Configure Domain**
   - After deployment, go to Domain Management
   - Add custom domain
   - Update your domain's DNS records

**Features:**
- ✅ Continuous deployment
- ✅ Environment variables
- ✅ Backend integration ready
- ✅ Performance monitoring

---

### Option 3: Netlify

**Steps:**

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Create Netlify Account**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **Deploy**
   - Click "New site from Git"
   - Connect GitHub
   - Select repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

**Note:** Requires Netlify adapter for Next.js ISR.

---

### Option 4: Docker + Self-Hosted

For complete control, host on your own server.

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

**Build & Run:**
```bash
# Build image
docker build -t r18-ai-labs .

# Run container
docker run -p 3000:3000 r18-ai-labs
```

**Deploy with Docker Compose:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

---

## Environment Configuration

### Vercel Environment Variables

1. Go to Project Settings → Environment Variables
2. Add variables (if needed in future):

```
NEXT_PUBLIC_SITE_URL=https://r18ailabs.com
```

### Local Testing

Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Pre-Deployment Checklist

- [ ] All components render without errors
- [ ] Responsive on mobile, tablet, desktop
- [ ] All links working (internal and external)
- [ ] Images optimized and loading
- [ ] No console errors or warnings
- [ ] Lighthouse scores > 80
- [ ] SEO metadata correct
- [ ] Social media previews set
- [ ] Analytics configured
- [ ] Error page working
- [ ] Performance optimized

**Run Pre-Deploy Check:**
```bash
npm run build
npm run lint
npm run type-check
```

---

## Performance Optimization

### Image Optimization

Already configured in Next.js. Use Image component:
```tsx
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Logo"
  width={100}
  height={100}
  priority
/>
```

### Code Splitting

Automatic in Next.js App Router. No action needed.

### Caching Strategy

**Browser Cache** (30 days)
```js
// next.config.ts
const headers = {
  'Cache-Control': 'public, max-age=2592000'
}
```

**CDN Cache** (automatic on Vercel)
- HTML: 60 seconds
- Assets: 365 days

---

## Monitoring & Analytics

### Google Analytics Setup

1. Create Google Analytics 4 property
2. Add measurement ID to environment

### Error Tracking with Sentry

1. Install Sentry:
   ```bash
   npm install @sentry/nextjs
   ```

2. Configure in `next.config.ts`

3. Set SENTRY_AUTH_TOKEN in Vercel

---

## DNS Configuration

### Nameserver Setup

If using custom domain:

1. Go to domain registrar
2. Point nameservers to Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

### A Record (Alternative)

```
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600
```

---

## SSL/TLS Certificate

- **Vercel**: Automatic (Let's Encrypt)
- **AWS Amplify**: Automatic (AWS Certificate Manager)
- **Netlify**: Automatic (Let's Encrypt)
- **Self-Hosted**: Use certbot or manual

---

## Continuous Integration

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

---

## Rollback Procedure

### Vercel
1. Go to Deployments
2. Select previous deployment
3. Click "Promote to Production"

### Manual Rollback
```bash
git revert <commit-sha>
git push origin main
# Deploy automatically triggers
```

---

## Maintenance

### Regular Tasks

**Weekly:**
- Monitor error logs
- Check performance metrics

**Monthly:**
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Test on real devices

**Quarterly:**
- Full security scan
- Lighthouse audit
- A/B test improvements

---

## Support & Troubleshooting

### Common Deployment Issues

**Issue**: "Build Failed"
```bash
# Solution: Clear cache and rebuild
npm ci
npm run build
```

**Issue**: "Timeout during build"
```bash
# Solution: Increase build timeout in Vercel settings
# Settings → Build & Deploy → Build Settings
```

**Issue**: "404 on routes"
```bash
# Solution: Ensure all routes are in app/ directory
# Check next.config.ts routing config
```

---

## Getting Help

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Community Discord**: https://discord.gg/nextjs

---

## Success Indicators

After deployment, verify:

✅ Site loads without errors
✅ All navigation links work
✅ Mobile menu functions
✅ Forms submit (if any)
✅ Images load fast
✅ SEO tags present
✅ Analytics tracking
✅ No console errors

**Check Site:**
```bash
# Test performance
curl -w "@curl-format.txt" -o /dev/null -s https://r18ailabs.com

# Check headers
curl -I https://r18ailabs.com

# SSL test
curl --ssl-reqd https://r18ailabs.com
```

---

Ready to deploy! Choose your platform and follow the steps above. 🚀
