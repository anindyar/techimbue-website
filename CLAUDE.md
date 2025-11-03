# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TechImbue is a static marketing website showcasing technology consultancy services with a focus on infrastructure, cybersecurity, and AI solutions. The site features a dark monochrome design with gold accents and glassmorphism effects.

**Tech Stack:** Pure HTML5, CSS3, and Vanilla JavaScript (ES6+) - no build tools or frameworks required.

**Blog System:** JSON-based static blog (posts stored in `blog/posts.json`, rendered dynamically with JavaScript)

## Development Commands

### Local Development
```bash
# Serve locally with Python
python3 -m http.server 8000
# Access at http://localhost:8000

# Alternative: Node.js http-server
npx http-server -p 8000
```

### Git Operations
The repository is already initialized. Standard git workflow:
```bash
git add .
git commit -m "your message"
git push origin main
```

## Architecture Overview

### File Structure
- `index.html` - Single-page application with all sections (hero, services, clients, about, book, contact)
- `styles.css` - Complete styling with CSS custom properties for theming
- `script.js` - All interactive functionality
- `blog/` - Blog system directory
  - `posts.json` - All blog posts data (edit this to add new posts)
  - `index.html` - Blog listing page
  - `post.html` - Individual post page template
  - `blog-index.js` - Renders blog listing from JSON
  - `blog-post.js` - Renders individual posts from JSON
  - `blog-styles.css` - Blog-specific styles
  - `README.md` - Instructions for adding new posts

### Design System

**Color Scheme:** Dark monochrome with gold accents
- Primary color: `--primary: #D4AF37` (gold)
- Background: Shades of black/charcoal (`--jet-black`, `--ash-black`, `--deep-charcoal`)
- Text: White/gray variations for hierarchy
- All colors defined in `:root` CSS variables in `styles.css:8-42`

**Key Design Pattern:** Glassmorphism with `.glass` class:
- Semi-transparent backgrounds (`rgba(26, 26, 26, 0.8)`)
- Backdrop blur filter
- Subtle borders and shadows
- Applied to cards, navigation, modals

### JavaScript Architecture

**Event-Driven Features:**
1. **Smooth Scrolling** (`script.js:2-13`) - All anchor links scroll smoothly
2. **Navbar Scroll Effects** (`script.js:15-33`) - Background opacity and padding change on scroll
3. **Intersection Observer** (`script.js:36-71`) - Fade-in animations for cards and stats
4. **Mobile Menu** (`script.js:74-112`) - Hamburger toggle with glassmorphism dropdown
5. **Parallax Background** (`script.js:115-127`) - Gradient orbs follow mouse movement
6. **Tech Card Modals** (`script.js:158-215`) - Interactive modal system with multiple panels
7. **Active Nav Links** (`script.js:258-278`) - Highlights current section in navigation

**Important Modal Implementation:**
- Tech cards in hero section open detailed modals (`data-modal` attribute links to `data-panel`)
- Modal closes via: X button, outside click, or Escape key
- Body scroll locked when modal is open
- Fixed bug (commit 298996e): Event propagation handled with `stopPropagation()`

### HTML Structure

**Single-Page Sections (in order):**
1. Navigation (fixed, glassmorphism)
2. Hero with 3x3 tech cards grid
3. Tech modals (hidden by default)
4. Services (5 service cards)
5. Clients (4 client showcases)
6. About (stats and company info)
7. Founder (bio, credentials, expertise)
8. Book (latest publication promotion)
9. Contact (email CTA)
10. Footer

**SEO & Structured Data:**
- Comprehensive meta tags (`index.html:3-38`)
- Schema.org JSON-LD (`index.html:728-851`) for Organization, Person, Services, Book
- Sitemap: `sitemap.xml`
- Robots: `robots.txt`

## Key Implementation Details

### Responsive Design
Three breakpoints in `styles.css`:
- Desktop: Default styles
- Tablet: `@media (max-width: 968px)` around line ~1487
- Mobile: `@media (max-width: 640px)` around line ~1588

### Animation System
- **Scroll-triggered:** Intersection Observer adds `.visible` class to `.fade-in` elements
- **Tech Cards:** Individual floating animations (`@keyframes` for each card)
- **Hover Effects:** Pause animation on hover, glow effects
- **Page Load:** Fade-in effect (`script.js:249-255`)

### Common Modifications

**Update Colors:**
Edit CSS variables in `styles.css:8-42`. All colors reference these variables.

**Add New Service:**
1. Add service card in `index.html` services section
2. Copy existing `.service-card` structure
3. Animation automatically applied via Intersection Observer

**Add New Client:**
1. Add client logo image to root directory
2. Create `.client-card` in clients section (`index.html:419-502`)
3. Include logo, description, and external link

**Modify Tech Cards/Modals:**
1. Update card in hero grid (`index.html:108-143`)
2. Ensure `data-modal` attribute matches corresponding modal panel
3. Add/edit modal panel in modals section (`index.html:150-288`)
4. Use `data-panel` attribute to link

**Update Contact Email:**
Currently: `anindya@techimbue.com` - appears in contact section and mailto links

### Bug Fixes History

**Mobile Menu Bug (commit 29f6fb3):**
- Issue: Menu disappeared after multiple nav link clicks
- Fix: Added check for `.active` class before hiding menu (`script.js:105`)
- Only hides menu in mobile mode, not desktop

**Modal Close Bug (commit 298996e):**
- Issue: Close button on tech modals not working
- Fix: Added `stopPropagation()` to prevent event bubbling (`script.js:197`)
- Multiple close methods now work reliably

## Content Management

**Founder Information:**
- Name: Anindya Roy
- LinkedIn: https://www.linkedin.com/in/ranindya/
- Email: anindya@techimbue.com
- Book: "Gen AI for Leaders in a Hurry" (Amazon)

**Client Logos:**
- `inspire-logo.svg` - Inspire Infosol
- `digital-insights-logo.webp` - Digital Insights
- `stortech-logo.png` - Stortech
- `chimes-logo.jpg` - Chimes Group

**Site Logo:** `logo.jpg`
**Book Cover:** `book-cover.jpg`

## Deployment

Static site - deploy to any hosting:
- **GitHub Pages:** Push to gh-pages branch or configure in settings
- **Netlify/Vercel:** Drag & drop or connect repository (no build command needed)
- **Traditional Hosting:** Upload all files via FTP

No build process, no dependencies, no compilation required.

## Blog System

**Architecture:** JSON-based static blog - no build tools required

**Adding New Posts:**
1. Edit `blog/posts.json`
2. Add post object to the beginning of the array
3. Use content blocks: `paragraph`, `heading`, `list`, `video`, `image`, `quote`
4. Posts auto-render on blog index and individual post pages
5. See `blog/README.md` for detailed instructions and templates

**Post Structure:**
- Posts stored as JSON objects with metadata (title, date, author, tags, excerpt)
- Content is an array of content blocks (different types: text, headings, lists, media)
- LinkedIn videos shown as clickable placeholders (LinkedIn doesn't allow direct embedding)
- Dynamic rendering with JavaScript - no manual HTML writing needed

**URLs:**
- Blog index: `/blog/index.html`
- Individual post: `/blog/post.html?id=post-slug`
- Slugs auto-generated from post ID field

**Reposting from LinkedIn:**
1. Copy LinkedIn post content
2. Structure into JSON format using content blocks
3. Include `linkedinUrl` field for attribution
4. Videos link to LinkedIn (can't be embedded directly)

## Browser Compatibility

Fully compatible with modern browsers (Chrome, Firefox, Safari, Edge). Key features:
- `backdrop-filter` for glassmorphism (widely supported)
- Intersection Observer API (native support)
- CSS Grid and Flexbox
- ES6+ JavaScript
- `fetch()` API for loading blog posts
