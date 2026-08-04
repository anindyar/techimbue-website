# TechImbue Website - Project Documentation

## Project Overview

TechImbue is a modern, glassmorphism-styled consulting website showcasing technology leadership and AI expertise. The site features a sleek dark slate minimal theme with cyan accents, creating an innovative and cutting-edge aesthetic.

**Live Site:** [Your deployment URL]
**Repository:** https://github.com/anindyar/techimbue-website.git

## Tech Stack

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Custom properties, flexbox, grid, animations, glassmorphism effects
- **Vanilla JavaScript**: ES6+, Intersection Observer API, event handling
- **Design Philosophy**: Dark slate minimal with cyan accents, glassmorphism, parallax effects

## Project Structure

```
techimbue-website/
├── index.html              # Main HTML file with all page sections
├── styles.css              # Complete stylesheet with theme variables
├── script.js               # Interactive features and animations
├── book-cover.jpg          # Book cover image for "Gen AI for Leaders in a Hurry"
├── techimbue-logo.svg      # Company logo
├── .gitignore              # Git ignore patterns
└── claude.md               # This documentation file
```

## Design System

### Color Palette (Dark Slate Minimal Theme)

```css
/* Primary Colors */
--primary: #06B6D4        /* Cyan - main accent color */
--secondary: #0891B2       /* Darker cyan */
--accent: #22D3EE          /* Bright cyan - highlights */
--accent2: #67E8F9         /* Light cyan - secondary highlights */

/* Background Colors */
--dark-bg: #020617         /* Almost black - deepest background */
--slate-dark: #0F172A      /* Dark slate - primary background */
--slate-med: #1E293B       /* Medium slate - cards/sections */
--slate-light: #334155     /* Light slate - borders/dividers */

/* Text Colors */
--text-light: #F8FAFC      /* Off-white - primary text */
--text-muted: #CBD5E1      /* Muted text - secondary text */

/* Glass Effects */
--glass-bg: rgba(30, 41, 59, 0.4)           /* Glassmorphism background */
--glass-border: rgba(100, 116, 139, 0.3)    /* Glass borders */
--shadow: 0 8px 32px 0 rgba(6, 182, 212, 0.15)  /* Cyan-tinted shadows */
```

### Special Elements

**Book Promotion Buttons:**
- Orange/gold gradient: `linear-gradient(135deg, #FF6B35, #F7931E, #FDC830)`
- Prominent positioning in navigation and hero section
- Shimmer animation on hover

**Background:**
- Three animated gradient orbs with cyan colors
- Subtle parallax effect on mouse movement
- Animated grid pattern overlay in hero section

## Features

### 1. Navigation Bar
- **Location:** `index.html:19-40`
- Fixed position with scroll effects
- Glassmorphism background
- Responsive mobile menu with hamburger toggle
- Prominent "My Book" button with icon

### 2. Hero Section
- **Location:** `index.html:47-104`
- Grid pattern background with animation
- Pulse glow effect
- 3x3 grid of interactive technology cards
- Prominent book CTA button
- Gradient text effects

### 3. Interactive Tech Cards
- **Location:** `index.html:77-100` (HTML), `styles.css:437-533` (CSS)
- 9 technology areas: Cloud, AI/ML, Data, DevOps, Security, Automation, Analytics, Strategy, Innovation
- Click to open detailed modal popups
- Floating animation on each card
- Hover effects with glow

### 4. Tech Modals
- **Location:** `script.js:150-208`
- Detailed service descriptions for each tech area
- Close on X button, outside click, or Escape key
- Smooth fade-in/slide-up animations
- **Fixed bug:** Modal close button now works reliably with proper event handling

### 5. Services Section
- **Location:** `index.html:153-229`
- Three core service offerings
- Featured badge on AI Strategy card
- Hover effects with gradient top border

### 6. Clients Section
- **Location:** `index.html:234-322`
- Five client showcases with logos
- External links to client websites
- Logo hover effects

### 7. Founder/About Section
- **Location:** `index.html:327-396`
- Founder bio with expertise areas
- Interactive expertise tags
- LinkedIn profile link
- Credentials with icons

### 8. Book Section
- **Location:** `index.html:401-449`
- Book cover image with hover effects
- "NEW" badge with pulse animation
- Detailed book description
- CTA buttons for Amazon purchase
- Available format badges

### 9. Contact Section
- **Location:** `index.html:454-476`
- Email and LinkedIn contact methods
- Icon-enhanced contact cards

## JavaScript Features

### Smooth Scrolling
- **Location:** `script.js:2-13`
- Smooth scroll for all anchor links

### Navbar Effects
- **Location:** `script.js:15-31`
- Background opacity changes on scroll
- Padding adjustments for compact look

### Scroll Animations
- **Location:** `script.js:33-69`
- Intersection Observer for fade-in effects
- Staggered delays for service cards, client cards, and stats
- Automatic triggering when elements enter viewport

### Mobile Menu
- **Location:** `script.js:71-108`
- Toggle functionality for mobile hamburger menu
- Auto-close on link click (mobile only - **bug fixed**)
- Glassmorphism styling

### Parallax Effects
- **Location:** `script.js:110-120`
- Gradient orbs follow mouse movement
- Multi-speed parallax for depth

### Counter Animation
- **Location:** `script.js:122-137`, `script.js:210-228`
- Animated counting for statistics
- Triggers when stats scroll into view

### Tech Card Interactions
- **Location:** `script.js:139-148`
- Pause/resume animations on hover

### Modal System
- **Location:** `script.js:150-208`
- Open modals on tech card click
- Close via X button, outside click, or Escape key
- Panel switching for different tech areas
- Body scroll lock when modal open

## Recent Changes

### Dark Slate Theme Transformation (Commit: 29f6fb3)
- Transformed entire color scheme from blue to dark slate minimal
- Updated 80+ color references throughout CSS
- Changed primary from `#00A8E8` to `#06B6D4` (cyan)
- Updated all gradient orbs, backgrounds, and UI elements
- Enhanced glassmorphism for darker theme

### Menu Bug Fix (Commit: 29f6fb3)
- **Issue:** Menu was vanishing after clicking nav links multiple times
- **Root Cause:** `navLinks.style.display = 'none'` was being set regardless of screen size
- **Fix:** Added condition to only hide menu when in mobile mode (`navLinks.classList.contains('active')`)
- **Location:** `script.js:100-105`

### Book Button Addition (Commit: 298996e)
- Added prominent book buttons in navigation and hero section
- Standout orange/gold gradient design
- Shimmer animation effect
- Smooth scroll to book section

### Modal Close Fix (Commit: 298996e)
- Fixed non-functional close button on tech card modals
- Added proper event handling and `stopPropagation()`
- Multiple close methods: X button, outside click, Escape key

## Development Guide

### Making Theme Changes

To adjust colors, modify CSS variables in `styles.css:8-22`:

```css
:root {
    --primary: #06B6D4;        /* Change primary accent color */
    --accent: #22D3EE;         /* Change bright accent */
    /* ... etc */
}
```

All color references use these variables, so changes propagate automatically.

### Adding New Sections

1. Add HTML structure in `index.html`
2. Create corresponding styles in `styles.css`
3. Add any interactive features in `script.js`
4. Use `.glass` class for glassmorphism effects
5. Add `.fade-in` class for scroll animations

### Modifying Animations

**Gradient Orbs:**
- Location: `styles.css:83-93` (`@keyframes float`)
- Adjust timing: `animation-delay` on `.orb-1`, `.orb-2`, `.orb-3`

**Tech Card Float:**
- Location: `styles.css:534-613` (individual card keyframes)
- Each card has its own animation timing

**Scroll Animations:**
- Location: `script.js:33-69` (Intersection Observer)
- Adjust `threshold` and `rootMargin` for trigger points

### Responsive Breakpoints

- **Desktop:** Default styles
- **Tablet:** `@media (max-width: 968px)` at `styles.css:1487`
- **Mobile:** `@media (max-width: 640px)` at `styles.css:1588`

## Deployment

### GitHub Pages
```bash
# Already pushed to master
# Enable GitHub Pages in repo settings → Pages → Source: master branch
```

### Cloudflare Pages
1. Connect GitHub repository
2. Build command: (none - static site)
3. Output directory: `/`
4. Deploy

### Netlify
```bash
# Drag and drop the project folder to Netlify
# Or connect via GitHub
```

## Common Tasks

### Update Logo
Replace `techimbue-logo.svg` with new logo file. Adjust size in `styles.css:138-149` if needed.

### Update Book Cover
Replace `book-cover.jpg` with new image. Maintain aspect ratio for best results.

### Add New Client
1. Add client logo image to project root
2. Add new `.client-card` in `index.html` clients section
3. Follow existing card structure with logo, description, and link

### Change Hero Cards
1. Modify card content in `index.html:77-100`
2. Add/modify corresponding modal panel in `index.html:110-150`
3. Ensure `data-modal` attribute matches `data-panel` attribute

## Browser Compatibility

- Chrome/Edge: Full support ✅
- Firefox: Full support ✅
- Safari: Full support ✅ (with `-webkit-` prefixes included)
- Mobile browsers: Optimized for touch and mobile viewports ✅

## Performance Optimizations

- CSS animations use `transform` and `opacity` for GPU acceleration
- Intersection Observer for efficient scroll animations
- Minimal JavaScript dependencies (vanilla JS only)
- Optimized image loading
- Backdrop-filter for performant glassmorphism

## Future Enhancement Ideas

- [ ] Add blog section
- [ ] Integrate contact form with backend
- [ ] Add case studies section
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive data visualizations
- [ ] SEO meta tags and Open Graph tags
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] Add testimonials carousel
- [ ] Multi-language support

## Troubleshooting

### Menu Not Working on Mobile
- Check that `mobile-menu-toggle` button exists in HTML
- Verify JavaScript is loaded and no console errors
- Ensure responsive breakpoint styles are applied

### Modal Won't Close
- Verify modal close button has proper event listeners
- Check that `e.stopPropagation()` is preventing unwanted bubbling
- Ensure modal, modalClose, and modalPanels are properly selected

### Animations Not Triggering
- Check browser console for Intersection Observer support
- Verify elements have `.fade-in` class
- Check that observer thresholds are appropriate for viewport

### Glassmorphism Not Showing
- Ensure `backdrop-filter` is supported in browser
- Check that parent element has background content to blur
- Verify glass variables are properly defined in `:root`

## Credits

**Design & Development:** Generated with Claude Code
**Founder:** Anindya Roy
**Technologies:** HTML5, CSS3, JavaScript ES6+
**Design Style:** Dark Slate Minimal with Glassmorphism

---

*Last Updated: October 2025*
*Version: 2.0 (Dark Slate Theme)*
