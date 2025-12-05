# 🎨 Customization Guide

This guide will help you personalize the website for your girlfriend.

## ✏️ Essential Customizations

### 1. Change Names (REQUIRED)

**File:** `src/App.jsx`
**Lines:** 60-61

```javascript
// Change these two lines:
const herName = "Aşkım"; // ← Replace with her name
const yourName = "Senin Adın"; // ← Replace with your name
```

**Example:**
```javascript
const herName = "Ayşe";
const yourName = "Mehmet";
```

---

### 2. Add Her Photo (HIGHLY RECOMMENDED)

**Step 1:** Add the photo
- Place her photo in the `public` folder
- Name it something like `her-photo.jpg`

**Step 2:** Update the code
**File:** `src/components/FinalSurprise.jsx`
**Line:** ~83

Find this section:
```jsx
<div className="photo-placeholder">
  <p className="photo-text">Fotoğrafını buraya ekle ♥</p>
  <p className="photo-hint">(src/components/FinalSurprise.jsx dosyasında)</p>
</div>
{/* Uncomment and add image path:
<img src="/path-to-her-photo.jpg" alt="Love" className="photo-image" />
*/}
```

Replace it with:
```jsx
<img src="/her-photo.jpg" alt="My Love" className="photo-image" />
```

---

### 3. Customize the Secret Love Letter

**File:** `src/components/SecretLetter.jsx`
**Lines:** 37-60

Edit the letter content to make it personal:

```jsx
<p className="letter-text">
  Canım [Her Name],
</p>
<p className="letter-text">
  [Write your personal message here...]
</p>
```

**Example:**
```jsx
<p className="letter-text">
  Canım Ayşe,
</p>
<p className="letter-text">
  İlk tanıştığımız günden beri hayatım bambaşka. Seninle geçirdiğim
  her an benim için paha biçilmez bir hazine. Bu gizli mesajı
  bulduysan, demek ki özel tarihimizi hatırlıyorsun.
</p>
<p className="letter-text">
  Seni sonsuza kadar seveceğim.
</p>
<p className="letter-text signature">
  Sonsuz sevgiyle,
  <br />
  <span className="signature-name">Mehmet ♥</span>
</p>
```

---

### 4. Change the Secret Anniversary Sequence

**File:** `src/App.jsx`
**Line:** 47

Currently set to cards 1, 4, 3. Change to your anniversary date:

```javascript
if (lastThree[0] === 1 && lastThree[1] === 4 && lastThree[2] === 3) {
```

**Examples:**
- Anniversary: February 15th → `2, 1, 5`
- Anniversary: June 28th → `6, 2, 8`
- Anniversary: November 3rd → `1, 1, 3`

Updated code:
```javascript
if (lastThree[0] === 6 && lastThree[1] === 2 && lastThree[2] === 8) {
```

---

## 🎨 Optional Customizations

### Change the Color Palette

**File:** `src/index.css`
**Lines:** 10-16

```css
:root {
  --rose-gold: #b76e79;     /* Main accent color */
  --soft-pink: #ffc0cb;      /* Secondary pink */
  --cream-white: #fff5f7;    /* Background */
  --gold: #d4af37;           /* Gold accents */
  --dark-text: #5a3e3e;      /* Text color */
}
```

**Try these color palettes:**

**Purple Romance:**
```css
:root {
  --rose-gold: #9b6b9e;
  --soft-pink: #e8b4e8;
  --cream-white: #faf5ff;
  --gold: #d4a5d4;
  --dark-text: #4a3e4a;
}
```

**Blue Serenity:**
```css
:root {
  --rose-gold: #6b8e9b;
  --soft-pink: #b4d4e8;
  --cream-white: #f5f9ff;
  --gold: #7fb3d5;
  --dark-text: #3e4a5a;
}
```

---

### Modify the Final Surprise Message

**File:** `src/components/FinalSurprise.jsx`
**Lines:** 59-68

Change the message shown when all cards are revealed:

```jsx
<motion.h2 className="final-title">
  Ve en önemli sebep...
</motion.h2>

<motion.p className="final-message">
  Sen, sen olduğun için.
  <br />
  <span className="highlight">Seni sonsuza kadar seveceğim.</span>
</motion.p>
```

---

### Add Background Music (Advanced)

**File:** `src/components/LandingPage.jsx`

Add after line 4:
```jsx
import { useState } from 'react';

const LandingPage = ({ onStart, herName, yourName }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    // Add your music logic here
    setIsMusicPlaying(!isMusicPlaying);
  };
```

Then add a music button in the JSX.

---

## 🧪 Testing Your Changes

After making changes:

1. **Save all files**
2. **Check the browser** - Vite will auto-reload
3. **Test on mobile** - Open `http://localhost:5173` on your phone (same WiFi network)
4. **Clear progress** - Open DevTools → Application → Local Storage → Delete `loveCardsProgress` to test from scratch

---

## 🚀 Before You Show Her

### Checklist:
- [ ] Changed both names in App.jsx
- [ ] Added her photo
- [ ] Customized the secret letter
- [ ] Set the correct anniversary sequence
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Cleared localStorage to ensure fresh start
- [ ] Built for production (`npm run build`)
- [ ] Deployed to a hosting service

---

## ❤️ Final Tips

1. **Test everything yourself first!** Click through all 100 cards at least once
2. **Show it to her on a special occasion** - birthday, anniversary, or "just because"
3. **Have a backup plan** - Take screenshots in case of technical issues
4. **Consider printing** - After she sees it, you could print all 100 reasons as a physical gift too

Good luck! She's going to love it! 💕
