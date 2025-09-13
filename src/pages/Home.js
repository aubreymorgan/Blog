// Home.js --> Displays a welcome message.
import "../App.css"; 

function Home() {
    return (
        
        <div className="home-container">
            <div className="block1">
                <img src="/images/me.png" alt="stripes"/>
                <p className="text">
                    <h1>Welcome to My Blog</h1>
                    <h4>A short sentance in bold.</h4>
                    A place to share thoughts, stories, and experiences.  
                    Dive into a collection of posts written by passionate authors,  
                    and feel free to contribute your own insights!
                </p>
            </div>
            <div className="block2">
                <h4>Welcome to a collective of great minds and ideas shared in one place, a place of wonder</h4>
            </div>
            <div className="block3">
                <div className="text-box">
                    <h1>Values & Mission</h1>
                </div>
                <div className="text-box">
                    <h1>Audience</h1>
                    
                </div>
            </div>


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
       