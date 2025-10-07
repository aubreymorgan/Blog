// NewPost.js --> Contains a form for creating new posts.
import { useState } from "react";
import "./NewPost.css"; 


function NewPost({setPosts}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(""); 

    function handleSubmit(event) {
        // Prevents page reload
        event.preventDefault();

        // Validation: Check if any field is empty
        if (!title.trim() || !author.trim() || !content.trim()) {
            setError("All fields are required!");
            return; // Stop submission if validation fails
        }

        // Clear any previous error messages
        setError("");
    
        // Create a newPost object
        const newPost = {
            title,
            author,
            content,
            time: new Date().toLocaleString() 
        };

        //  confirmation before submitting
        const confirmed = window.confirm(
            `Are you sure you are ready to submit this blog post?\n` +
            `Title: ${newPost.title}\n` +
            `Author: ${newPost.author}\n` +
            `Content: ${newPost.content}`
        );

        // stop if user canceled
        if (!confirmed) {
            return;
        }

        // After submission, update the blog post list dynamically
        setPosts((prevPosts) => prevPosts.concat(newPost));

        // Clear input fields
        setTitle("");
        setAuthor("");
        setContent("");
    }

    // Auto-resize handler for textarea
    function handleContentChange(event) {
        setContent(event.target.value);

        // Reset then adjust height based on scrollHeight
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    }

    

    return (
        <div className="NewPost-container">
            <h1>New Post</h1>
            {/* Display error message */}
            {error && <p className="NewPost-error">{error}</p>} 
            <form onSubmit = {handleSubmit}className="NewPost-form">
                <input  
                    type = "text" 
                    value = {title} 
                    placeholder = "Title"
                    className="NewPost-input"
                    onChange = {(event) => setTitle(event.target.value)} 
                />
                <br />
                <input  
                    type = "text" 
                    value = {author} 
                    placeholder = "Author"
                    className="NewPost-input"
                    onChange = {(event) => setAuthor(event.target.value)} 
                />
                <br />
                <textarea
                    value = {content}
                    placeholder = "Write your post here..."
                    className="NewPost-textarea"
                    onChange = {handleContentChange}
                />
                <br />
                <button type = "submit" className="NewPost-button">Submit</button>
            </form>
        </div>
    );

}

export default NewPost;