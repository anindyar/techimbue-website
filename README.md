# TechImbue Website

Technology. Inspiring.

A modern, high-tech website showcasing TechImbue's technology services with beautiful glassmorphism design and brand-matched color scheme.

## Features

- **Brand-Matched Design**: Custom color scheme matching TechImbue's cyan/blue branding
- **Glassmorphism Effects**: Stunning frosted glass effects with vibrant gradient backgrounds
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and interactive elements
- **Modern Tech Stack**: Pure HTML, CSS, and JavaScript - no build process required
- **Services Showcase**: Five comprehensive service offerings prominently displayed
- **Professional Logo Integration**: High-quality logo display with hover effects

## Services Highlighted

1. **Infrastructure Consultancy** - Cloud architecture and system optimization
2. **CyberSecurity** - Comprehensive security solutions and threat protection
3. **Hyper Custom AI Workflows** - Bespoke AI solutions tailored to your business
4. **Local AI Solutions** - Privacy-first AI deployments on your infrastructure
5. **AI Interpretability & Audit** - Transparent and trustworthy AI systems

## How to Use

### Local Development

Simply open `index.html` in your web browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server -p 8000
```

### Deployment

Deploy to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your git repository
- **GitHub Pages**: Push to a gh-pages branch
- **Traditional Hosting**: Upload files via FTP

## Customization

### Colors

The color scheme matches TechImbue's branding. Edit the CSS variables in `styles.css` if needed:

```css
:root {
    --primary: #00A8E8;      /* TechImbue cyan */
    --secondary: #0077B6;    /* Darker blue */
    --accent: #00D9FF;       /* Bright cyan */
    --accent2: #90E0EF;      /* Light blue */
    --dark-bg: #0A1929;      /* Dark navy */
}
```

### Content

- **Company Info**: Edit text in `index.html`
- **Contact Email**: Update `contact@techimbue.com` in the contact section
- **Services**: Modify the service cards in the services section

### Animations

- Adjust animation speeds in `styles.css` keyframes
- Modify scroll behavior in `script.js`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

Note: Glassmorphism effects (backdrop-filter) are best viewed in modern browsers.

## Performance

- Lightweight: No external dependencies
- Fast loading: Pure CSS animations
- Optimized: Minimal JavaScript
- SEO-friendly: Semantic HTML structure

## File Structure

```
techimbue-website/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # Interactive functionality
├── logo.jpg        # TechImbue logo
└── README.md       # This file
```

## Tips

1. **Images**: Add your own images to enhance the visual appeal
2. **Favicon**: Add a `favicon.ico` for browser tab icon
3. **Analytics**: Insert your tracking code before `</body>`
4. **SEO**: Update meta tags in the `<head>` section

---

Built with modern web technologies for maximum impact and performance.
