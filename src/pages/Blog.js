// Blog.js --> Shows a list of blog posts.
import "./Blog.css"; 

function Blog({posts, deletePost}) {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <img src="/images/flower2.png" alt="" className="header-flower" />
                <h1>Blog</h1>
                <img src="/images/flower2.png" alt="" className="header-flower" />
            </div>
            {posts.length === 0 ? (
                <h2>Head over to the New Post page to get started!</h2>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {posts.map((post) => (
                        <li key={post.id} className="blog-post">
                            <h3>{post.title}</h3>
                            <p>Author: {post.author}</p>
                            <p>Posted on: {post.timestamp}</p>
                            <p className="blog-content">{post.content}</p>
                            
                            {/* Only show delete button if not a demo post */}
                            {!post.isDemo ? (
                                <button className="delete-btn" onClick={() => deletePost(post.id)}>
                                    <i className="fa-regular fa-trash-can"></i>
                                </button>
                            ) : (
                                <span className="demo-badge">Demo Post</span>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Blog;