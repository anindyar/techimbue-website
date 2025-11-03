// Load and render blog posts
async function loadBlogPosts() {
    try {
        const response = await fetch('posts.json');
        const posts = await response.json();

        const grid = document.getElementById('blog-posts-grid');

        if (posts.length === 0) {
            grid.innerHTML = '<p class="no-posts">No posts yet. Check back soon!</p>';
            return;
        }

        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Render posts
        grid.innerHTML = posts.map(post => createPostCard(post)).join('');

        // Add fade-in animation
        const cards = document.querySelectorAll('.blog-post-card');
        cards.forEach((card, index) => {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${index * 0.1}s`;
            setTimeout(() => {
                card.classList.add('visible');
            }, 50);
        });

    } catch (error) {
        console.error('Error loading blog posts:', error);
        const grid = document.getElementById('blog-posts-grid');
        grid.innerHTML = '<p class="error-message">Error loading posts. Please try again later.</p>';
    }
}

function createPostCard(post) {
    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const tags = post.tags.map(tag =>
        `<span class="post-tag">${tag}</span>`
    ).join('');

    const hasVideo = post.content.some(item => item.type === 'video');
    const videoIndicator = hasVideo ? '<span class="media-indicator">📹 Video</span>' : '';

    return `
        <article class="blog-post-card glass">
            <div class="post-header">
                <div class="post-meta">
                    <span class="post-date">${formattedDate}</span>
                    <span class="post-author">by ${post.author}</span>
                </div>
                ${videoIndicator}
            </div>
            <h2 class="post-title">
                <a href="post.html?id=${post.slug}">${post.title}</a>
            </h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-tags">
                ${tags}
            </div>
            <div class="post-footer">
                <a href="post.html?id=${post.slug}" class="read-more">
                    Read Full Post
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
                ${post.linkedinUrl ? `
                    <a href="${post.linkedinUrl}" target="_blank" rel="noopener" class="linkedin-link" title="View on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                ` : ''}
            </div>
        </article>
    `;
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadBlogPosts);
