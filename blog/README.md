# TechImbue Blog

JSON-based static blog system for reposting LinkedIn content and original articles.

## How to Add a New Blog Post

### Step 1: Open `posts.json`

This file contains all blog posts as a JSON array.

### Step 2: Add Your Post

Copy the template below and add it to the beginning of the array in `posts.json`:

```json
{
  "id": "unique-slug-here",
  "title": "Your Post Title Here",
  "slug": "unique-slug-here",
  "date": "2025-11-03",
  "author": "Anindya Roy",
  "excerpt": "A brief 1-2 sentence summary of your post that appears on the blog index page.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "linkedinUrl": "https://www.linkedin.com/posts/your-linkedin-post-url",
  "videoUrl": "optional-video-url-if-applicable",
  "content": [
    {
      "type": "paragraph",
      "text": "Your first paragraph goes here."
    },
    {
      "type": "heading",
      "text": "Section Heading"
    },
    {
      "type": "list",
      "items": [
        "First bullet point",
        "Second bullet point",
        "<strong>Bold text</strong> in bullet point"
      ]
    },
    {
      "type": "video",
      "url": "https://www.linkedin.com/posts/your-video-url",
      "caption": "Optional caption describing the video"
    }
  ]
}
```

### Step 3: Content Block Types

You can use these content block types:

#### Paragraph
```json
{
  "type": "paragraph",
  "text": "Your text here. You can use <strong>bold</strong>, <em>italic</em>, and <a href='url'>links</a>."
}
```

#### Heading
```json
{
  "type": "heading",
  "text": "Your Heading"
}
```

#### List
```json
{
  "type": "list",
  "items": [
    "Item 1",
    "Item 2 with <strong>formatting</strong>",
    "Item 3"
  ]
}
```

#### Video (LinkedIn embedded)
```json
{
  "type": "video",
  "url": "https://www.linkedin.com/posts/...",
  "caption": "Optional description (2:48)"
}
```

#### Image
```json
{
  "type": "image",
  "url": "/path/to/image.jpg",
  "alt": "Alt text for accessibility",
  "caption": "Optional caption"
}
```

#### Quote
```json
{
  "type": "quote",
  "text": "Your quoted text here"
}
```

## Quick Template for LinkedIn Reposts

When reposting from LinkedIn, use this structure:

1. Copy the LinkedIn post text
2. Break it into paragraphs
3. Add headings for structure
4. Include the LinkedIn URL in `linkedinUrl` field
5. If there's a video, add it as a video block

## Example: Full Post Structure

```json
{
  "id": "my-post-slug",
  "title": "My Amazing Discovery",
  "slug": "my-post-slug",
  "date": "2025-11-03",
  "author": "Anindya Roy",
  "excerpt": "Quick summary of the discovery and why it matters.",
  "tags": ["AI", "Research", "Innovation"],
  "linkedinUrl": "https://www.linkedin.com/posts/ranindya/...",
  "content": [
    {
      "type": "paragraph",
      "text": "Opening paragraph explaining context."
    },
    {
      "type": "heading",
      "text": "What I Discovered"
    },
    {
      "type": "paragraph",
      "text": "Details about the discovery."
    },
    {
      "type": "list",
      "items": [
        "<strong>Key Point 1:</strong> Description",
        "<strong>Key Point 2:</strong> Description"
      ]
    },
    {
      "type": "video",
      "url": "https://www.linkedin.com/posts/...",
      "caption": "Demo video (2:30)"
    },
    {
      "type": "paragraph",
      "text": "<em>Final thoughts or call to action.</em>"
    }
  ]
}
```

## Publishing

1. Edit `posts.json`
2. Add your new post to the array (at the beginning for newest first)
3. Save the file
4. Commit and push to your repository
5. Cloudflare Pages will automatically deploy the update

No build step required!

## Testing Locally

```bash
# Serve the site locally
python3 -m http.server 8000

# Open browser to:
# http://localhost:8000/blog/
```

## File Structure

```
blog/
├── index.html          # Blog listing page
├── post.html           # Individual post page template
├── posts.json          # All blog post data (EDIT THIS)
├── blog-index.js       # Renders blog listing
├── blog-post.js        # Renders individual posts
├── blog-styles.css     # Blog-specific styles
└── README.md           # This file
```

## Tips

- **Slug**: Use lowercase, hyphens, no spaces (e.g., `distributed-ai-research`)
- **Date**: Use YYYY-MM-DD format
- **Excerpt**: Keep it under 200 characters for best display
- **Tags**: 3-7 tags recommended
- **HTML in content**: You can use basic HTML tags like `<strong>`, `<em>`, `<a href="">`, etc.

## Troubleshooting

**Posts not showing up?**
- Check JSON syntax (use a JSON validator)
- Ensure commas between array items
- Make sure all required fields are present

**Video not working?**
- LinkedIn videos can't be embedded directly
- The system shows a placeholder with a link to view on LinkedIn
- This is a limitation of LinkedIn's embedding policies
