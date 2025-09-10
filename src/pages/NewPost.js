// NewPost.js --> Contains a form for creating new posts.
// To add:
//  clear input fields after hitting submit
//  validate feilds are not empty before hitting submit
//  time is not displaying

import { useState } from "react";
import "../App.css"; 


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
            time: new Date().toLocaleString() // Ensure parentheses to call the function
        };
    
        // Display new post in an alert box
        alert(`Title: ${newPost.title}\nAuthor: ${newPost.author}\nContent: ${newPost.content}\nPosted on: ${newPost.time}`);        
    
        // After submission, update the blog post list dynamically
        setPosts((prevPosts) => prevPosts.concat(newPost));

        // Clear input fields
        setTitle("");
        setAuthor("");
        setContent("");
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
                    onChange = {(event) => setContent(event.target.value)}
                />
                <br />
                <button type = "submit" className="NewPost-button">Submit</button>
            </form>
        </div>
    );

}

export default NewPost;