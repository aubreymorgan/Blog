// Blog.js --> Shows a list of blog posts.
import "./Blog.css"; 

function Blog({posts, setPosts}) {

    // Remove the selected post
    function handleDelete(indexToDelete) {
        setPosts(posts.filter((_, index) => index !== indexToDelete));
    }

    return (
        <div className="blog-container">
            <h1>Blog</h1>
            {posts.length === 0 ? (
                <h2>Head over to the New Post page to get started!</h2>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {posts.map((post, index) => (
                        <li key = {index} className="blog-post">
                            <h3>{post.title}</h3>
                            <p>Author: {post.author}</p>
                            <p>Posted on: {post.time}</p>
                            <p className="blog-content">{post.content}</p>
                            {/* Delete Button at Bottom Right */}
                            <button className="delete-btn" onClick={() => handleDelete(index)}>
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </li>
                        ))
                    }
                </ul>
                )
            }
        </div>
    );
}

export default Blog;
