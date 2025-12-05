# 💕 100 Reasons Why I Love You - Interactive Website

A beautiful, romantic interactive website showcasing 100 reasons why you love someone special. Built with React and Framer Motion for smooth, dreamy animations.

## ✨ Features

- 🎴 **100 Interactive Cards** - Flip cards to reveal each love reason
- 💾 **Progress Tracking** - Your progress is saved automatically
- 🎊 **Confetti Animations** - Celebration on each card reveal
- 💖 **Floating Hearts** - Subtle background particle effects
- 🎁 **Final Surprise** - Special animation when all cards are revealed
- 💌 **Secret Love Letter** - Hidden Easter egg triggered by clicking cards 1, 4, 3 in sequence
- 📱 **Fully Responsive** - Beautiful on all devices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 🎨 Customization

### 1. Personalize Names

In `src/App.jsx` (lines 60-61):
```javascript
const herName = "Aşkım"; // ← Change to her name
const yourName = "Senin Adın"; // ← Change to your name
```

### 2. Add Her Photo

In `src/components/FinalSurprise.jsx` (around line 83):
1. Add her photo to the `public` folder
2. Uncomment the img tag and update the path:
```jsx
<img src="/her-photo.jpg" alt="Love" className="photo-image" />
```

### 3. Customize Secret Letter

Edit the love letter content in `src/components/SecretLetter.jsx` (lines 37-60)

### 4. Change Anniversary Sequence

In `src/App.jsx` (line 47), update the sequence to your special date:
```javascript
if (lastThree[0] === 1 && lastThree[1] === 4 && lastThree[2] === 3) {
  // Change these numbers to your anniversary date (e.g., 2, 1, 5 for Feb 15)
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# The build files will be in the 'dist' folder
# You can then deploy to Netlify, Vercel, or any static hosting service
```

## 🌐 Deploy

### Option 1: Netlify (Easiest)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Option 2: Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy!

### Option 3: GitHub Pages
```bash
npm run build
# Upload contents of 'dist' folder to GitHub Pages
```

## 🎯 Tips

- Test it yourself first before showing her!
- Clear localStorage to reset progress: Open DevTools → Application → Local Storage → Delete `loveCardsProgress`
- The secret anniversary sequence can be triggered multiple times
- All animations are optimized for mobile devices

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Confetti Explosion** - Celebration effects

## 💝 Made with Love

This is a personal gift website. Feel free to customize every aspect to make it uniquely yours!

---

**Pro tip:** Add a custom domain to make it extra special! 🎁
