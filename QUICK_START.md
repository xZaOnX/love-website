# 🚀 Quick Start Guide

Get your romantic website running in 5 minutes!

## Step 1: Open Terminal

Navigate to the project folder:
```bash
cd love-website
```

## Step 2: Start the Website

```bash
npm run dev
```

You'll see:
```
➜  Local:   http://localhost:5173/
```

## Step 3: Open in Browser

Open **http://localhost:5173** in your browser

## Step 4: Test the Features

### Landing Page
- You'll see "Seni Sevmemin 100 Nedeni"
- Click "Keşfetmeye Başla" button

### Interactive Cards
- Click any card to flip it and reveal a reason
- Watch the confetti animation
- Progress tracker updates in top-right corner

### Secret Letter
- Click cards **1**, **4**, **3** in that order
- A secret love letter will appear
- (Change this sequence in customization!)

### Final Surprise
- Open all 100 cards
- Watch the special heart rain animation
- See the final message with photo placeholder

## Step 5: Customize (IMPORTANT!)

Open **CUSTOMIZATION_GUIDE.md** and follow the essential customizations:

1. **Change names** (src/App.jsx lines 60-61)
2. **Add her photo** (src/components/FinalSurprise.jsx)
3. **Edit secret letter** (src/components/SecretLetter.jsx)
4. **Update anniversary sequence** (src/App.jsx line 47)

## Step 6: Build for Production

When ready to share:

```bash
npm run build
```

The website will be built into the `dist` folder.

## Step 7: Deploy

Choose one:

### Option A: Netlify (Recommended)
1. Create account at netlify.com
2. Drag & drop the `dist` folder
3. Share the link with her!

### Option B: Vercel
1. Create account at vercel.com
2. Import the project
3. Deploy with one click

---

## ⚡ Commands Cheat Sheet

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 🆘 Troubleshooting

**Problem: npm command not found**
- Install Node.js from nodejs.org

**Problem: Port 5173 already in use**
- Close other terminals running Vite
- Or change port: `npm run dev -- --port 3000`

**Problem: Changes not showing**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

**Problem: Cards not saving progress**
- Check browser console (F12) for errors
- Try a different browser
- Clear localStorage and try again

---

## 💡 Pro Tips

1. **Test on mobile**: Open `http://YOUR-IP:5173` on your phone (same WiFi)
2. **Reset progress**: DevTools → Application → Local Storage → Delete `loveCardsProgress`
3. **Screenshot backup**: Take screenshots in case anything goes wrong
4. **Private browsing**: Test in incognito mode to simulate first-time experience

---

## ✅ Pre-Launch Checklist

Before showing her:

- [ ] Names are customized
- [ ] Photo is added
- [ ] Secret letter is personalized
- [ ] Anniversary sequence is correct
- [ ] Tested on desktop browser
- [ ] Tested on mobile phone
- [ ] All 100 cards work correctly
- [ ] Final surprise appears when all cards opened
- [ ] Secret letter appears with correct sequence
- [ ] Progress saves and persists on refresh
- [ ] Built and deployed to hosting service

---

**Ready to make her day? Let's go! 💕**
