# How to Add Exhibitions to Sanity

You have two options to add the exhibitions to your Sanity Studio:

## Option 1: Run the Migration Script (Recommended - Faster)

### Step 1: Get a Sanity API Token

1. Go to https://www.sanity.io/manage
2. Select your project (ledia-ceta-art)
3. Click on "API" in the left sidebar
4. Click "+ Add API token"
5. Name it "Migration Script" or similar
6. Set permissions to "Editor" (needs write access)
7. Copy the generated token

### Step 2: Add Token to Environment Variables

1. Open `.env.local` in your project root
2. Add this line with your token:
   ```
   SANITY_API_TOKEN=your_token_here
   ```
3. Save the file

### Step 3: Run the Migration Script

```bash
npm run add-exhibitions
```

This will automatically add all 8 exhibitions from 2025 to your Sanity database!

---

## Option 2: Add Manually Through Sanity Studio

If you prefer to add exhibitions manually or the script doesn't work:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open Sanity Studio in your browser:
   ```
   http://localhost:3000/studio
   ```

3. Click on "Exhibition" in the left sidebar

4. Click "+ Create" button to add a new exhibition

5. Use the information from `EXHIBITIONS_TO_ADD.md` file to fill in each exhibition

6. Repeat for all 8 exhibitions:
   - Beijing Biennale 2025
   - BIAB Conference 2025
   - Everything Has a Spirit 2025
   - Endless River 2025
   - Taiyuan Contemporary 2025
   - Melody 2025
   - Symphony of Civilizations 2025
   - Dragons and Snakes 2025

---

## After Adding Exhibitions

Once the exhibitions are added (via either method), they will automatically appear on your website:

- **Exhibitions Page**: `/exhibitions` - Shows all exhibitions
- **About Page**: All exhibition cards are now clickable and link to their detail pages
- **Exhibition Detail Pages**: Each exhibition has its own page with full description

The exhibitions are already linked on your about page, so clicking on any exhibition card will take visitors to the full exhibition details!
