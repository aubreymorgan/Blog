// Home.js --> Displays a welcome message.
import "../App.css"; 

function Home() {
    return (
        
        <div className="home-container">
            <h1>Welcome to My Blog</h1>
            <p className="intro-text">
                A place to share thoughts, stories, and experiences.  
                Dive into a collection of posts written by passionate authors,  
                and feel free to contribute your own insights!
            </p>

            <div className="feature-section">
                <h2>Features of This Blog</h2>
                <ul>
                    <li>Create and publish your own posts</li>
                    <li>Read posts from other users</li>
                    <li>Easily delete posts you no longer need</li>
                </ul>
            </div>

            <p className="cta-text">
                Ready to share your thoughts?  
                Head over to the <strong>New Post</strong> page to get started!  
            </p>
        </div>
    );
}

export default Home;
       