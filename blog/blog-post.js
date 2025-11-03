// Get post ID from URL parameters
function getPostId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Load and render individual blog post
async function loadBlogPost() {
    const postId = getPostId();

    if (!postId) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const response = await fetch('posts.json');
        const posts = await response.json();

        const post = posts.find(p => p.slug === postId);

        if (!post) {
            showError('Post not found');
            return;
        }

        // Update page metadata
        document.title = `${post.title} | TechImbue Blog`;
        updateMetaTags(post);

        // Render post
        const contentWrapper = document.getElementById('post-content');
        contentWrapper.innerHTML = renderPost(post);

        // Add fade-in animation
        setTimeout(() => {
            contentWrapper.classList.add('visible');
        }, 50);

    } catch (error) {
        console.error('Error loading blog post:', error);
        showError('Error loading post. Please try again later.');
    }
}

function updateMetaTags(post) {
    // Update description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
    }

    // Update OG tags if they exist
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', `${post.title} | TechImbue`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', post.excerpt);
    }
}

function renderPost(post) {
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const tags = post.tags.map(tag =>
        `<span class="post-tag">${tag}</span>`
    ).join('');

    const contentHtml = post.content.map(item => renderContentBlock(item)).join('');

    return `
        <header class="post-header glass">
            <div class="post-meta">
                <span class="post-date">${formattedDate}</span>
                <span class="post-author">by ${post.author}</span>
            </div>
            <h1 class="post-title">${post.title}</h1>
            <div class="post-tags">
                ${tags}
            </div>
            ${post.linkedinUrl ? `
                <a href="${post.linkedinUrl}" target="_blank" rel="noopener" class="linkedin-source">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    View Original on LinkedIn
                </a>
            ` : ''}
        </header>

        <div class="post-body glass">
            ${contentHtml}
        </div>

        <footer class="post-footer glass">
            <div class="post-share">
                <p>Share this post:</p>
                <div class="share-buttons">
                    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}"
                       target="_blank"
                       rel="noopener"
                       class="share-btn twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}"
                       target="_blank"
                       rel="noopener"
                       class="share-btn linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
            <a href="index.html" class="back-to-blog">← Back to All Posts</a>
        </footer>
    `;
}

function renderContentBlock(item) {
    switch (item.type) {
        case 'paragraph':
            return `<p>${item.text}</p>`;

        case 'heading':
            return `<h2>${item.text}</h2>`;

        case 'list':
            const listItems = item.items.map(li => `<li>${li}</li>`).join('');
            return `<ul>${listItems}</ul>`;

        case 'video':
            return `
                <div class="video-embed">
                    <div class="video-placeholder">
                        <a href="${item.url}" target="_blank" rel="noopener" class="video-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            <p><strong>Watch Video on LinkedIn</strong></p>
                            ${item.caption ? `<p class="video-caption">${item.caption}</p>` : ''}
                        </a>
                    </div>
                    <p class="video-note"><em>Note: Video hosted on LinkedIn. Click to view in a new tab.</em></p>
                </div>
            `;

        case 'image':
            return `
                <figure class="post-image">
                    <img src="${item.url}" alt="${item.alt || ''}" loading="lazy">
                    ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}
                </figure>
            `;

        case 'quote':
            return `<blockquote>${item.text}</blockquote>`;

        default:
            return '';
    }
}

function showError(message) {
    const contentWrapper = document.getElementById('post-content');
    contentWrapper.innerHTML = `
        <div class="error-message glass">
            <h2>Oops!</h2>
            <p>${message}</p>
            <a href="index.html" class="btn-primary">Back to Blog</a>
        </div>
    `;
}

// Load post when page loads
document.addEventListener('DOMContentLoaded', loadBlogPost);
