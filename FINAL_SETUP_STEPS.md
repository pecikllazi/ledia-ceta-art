# Final Setup Steps - Ledia Çeta Portfolio

## ✅ What's Done
- ✅ Website built and deployed
- ✅ GitHub repository created
- ✅ Vercel deployment successful
- ✅ Sanity CMS integrated

## 🎯 Complete These Final Steps

### 1. Set Up Sanity CORS (5 minutes) - REQUIRED

**Why:** This allows your website to fetch content from Sanity

**Steps:**
1. Go to https://manage.sanity.io
2. Select your project: "Ledia Ceta Art Portfolio"
3. Click **API** in the left sidebar
4. Click **CORS Origins**
5. Click **Add CORS origin**
6. Enter your Vercel URL: `https://ledia-ceta-art.vercel.app`
7. Check ✅ **Allow credentials**
8. Click **Save**

Also add localhost for local development:
- Origin: `http://localhost:3000`
- Check ✅ **Allow credentials**
- Click **Save**

---

### 2. Add Initial Content via Studio (20-30 minutes)

**Visit your Studio:** https://ledia-ceta-art.vercel.app/studio

#### Order of Content Creation:

**A. Site Settings** (Start here)
- Site name: "Ledia Çeta"
- Site description: "Albanian visual artist specializing in painting, mixed media, and installation art"
- Contact email
- Location
- Footer text

**B. Artist Profile**
- Name: "Ledia Çeta"
- Tagline: "Visual Artist · Painting · Mixed Media · Installation"
- Upload portrait photo
- Birth place: e.g., "Albania"
- Current location: e.g., "Beijing, China" or "Tirana, Albania"
- Short biography (2-3 paragraphs for homepage)
- Full biography (detailed)
- Artist statement
- CV sections:
  - Selected Exhibitions
  - Education
  - Awards
  - Collections
- Social links (Instagram, Facebook, LinkedIn, WeChat)

**C. Exhibitions** (Add these next)
Start with recent exhibitions, for example:
- 10th Beijing International Art Biennale (2025)
- Any other exhibitions from 2024-2025

For each exhibition:
- Title
- Theme/Subtitle
- Start date / End date
- Venue
- City, Country
- Type (Biennale, Solo, Group, etc.)
- Description (rich text)
- Upload poster image
- Add installation photos

**D. Artworks** (Main content)
For each artwork:
- Title (English and Chinese if applicable)
- Year
- Medium (Watercolours on Silk, Acrylic on Canvas, etc.)
- Dimensions (width × height × depth, unit: cm)
- Upload main image
- Upload gallery images (multiple angles)
- Description
- Series (e.g., "Cosmic Series", "Sea Series")
- Link to exhibitions where it was shown
- Mark as "Featured" for homepage (select 6 best pieces)
- Available for sale? (Yes/No)
- Price (if available)
- Display order (lower numbers appear first)

**E. News & Press** (Optional but recommended)
Add recent news:
- Beijing Biennale participation
- Press interviews
- Exhibition announcements
- Awards

For each news item:
- Title
- Date
- Type (Exhibition, Press, Interview, etc.)
- Excerpt (short summary)
- Full content (rich text)
- Featured image
- External link (if applicable)
- Link to related exhibition

---

### 3. Test Your Live Site

After adding content, test these pages:

✅ **Homepage**: https://ledia-ceta-art.vercel.app
- Should show hero, featured works, and artist intro

✅ **Works**: https://ledia-ceta-art.vercel.app/works
- Should show all artworks
- Test filtering by medium

✅ **Exhibitions**: https://ledia-ceta-art.vercel.app/exhibitions
- Should show exhibition history

✅ **About**: https://ledia-ceta-art.vercel.app/about
- Should show biography and CV

✅ **News**: https://ledia-ceta-art.vercel.app/news
- Should show news articles

✅ **Contact**: https://ledia-ceta-art.vercel.app/contact
- Contact form and information

---

### 4. Optional: Set Up Custom Domain

If you want to use a custom domain (e.g., lediaceta.com):

1. **In Vercel:**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow the instructions to update DNS

2. **Update Sanity CORS:**
   - Add your custom domain to CORS origins
   - Example: `https://lediaceta.com`

3. **Update Environment Variable:**
   - In Vercel settings → Environment Variables
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain

---

### 5. Enable Analytics (Optional)

Add Vercel Analytics:
1. In Vercel project settings
2. Click "Analytics"
3. Enable Analytics (free tier available)

---

## 📝 Content Tips

### For Artwork Descriptions:
- Keep descriptions engaging but concise
- Mention inspiration, technique, or meaning
- Include both English and Chinese translations if relevant

### For Exhibitions:
- Add context about the significance
- Include any awards or recognition
- Link related artworks

### For Homepage:
- Select 6 best/most representative artworks as "Featured"
- Keep artist intro concise (2-3 paragraphs)
- Set a current/upcoming exhibition if available

---

## 🎨 Image Guidelines

**Artworks:**
- High resolution (at least 1200px wide)
- Good lighting and color accuracy
- Multiple angles for installations
- Keep file sizes reasonable (< 5MB per image)

**Portrait:**
- Professional photo
- Good lighting
- At least 800px wide

**Exhibition Photos:**
- Installation views
- Opening reception photos
- Wide shots showing context

---

## 🔄 Making Updates

Whenever you want to update content:

1. Go to: https://ledia-ceta-art.vercel.app/studio
2. Edit/add content
3. Click "Publish"
4. Changes appear on the website within 60 seconds (thanks to ISR)

No coding required - just use the Studio!

---

## 🆘 Troubleshooting

**Issue: Images not showing**
- Check that CORS is set up correctly in Sanity
- Verify images are uploaded in the Studio

**Issue: Content not updating**
- Wait 60 seconds (ISR cache)
- Try hard refresh (Cmd+Shift+R on Mac)

**Issue: Studio not loading**
- Check browser console for errors
- Verify Sanity Project ID in Vercel environment variables

---

## 📞 Support Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support

---

## ✨ You're All Set!

Your professional artist portfolio is now live and ready to showcase Ledia's work to the world!

**Live Site**: https://ledia-ceta-art.vercel.app
**CMS Studio**: https://ledia-ceta-art.vercel.app/studio
**GitHub Repo**: https://github.com/pecikllazi/ledia-ceta-art

Start by adding content via the Studio, and the website will automatically update!
