// Home.js --> Displays a welcome message.
import "./Home.css"; 

function Home() {
    return ( 
        <div className="home-container">
            <div className="block1">
                <div className="introText">
                    <div className="title-wrapper">
                        <h1>Welcome to My Blog</h1>
                        <img src="/images/flowers3.png" alt="flowers" className="flower-overlay" />
                    </div>
                </div>
            </div>
            <div className="block2">
                <h4>Welcome to a collective of great minds and ideas shared in one place, a place of wonder</h4>
            </div>
            <div className="block3">
                <div className="text-box">
                    <h1 className="box-title">Values & Mission</h1>
                    <hr className="box-divider" />
                    <p className="box-text">
                        A place to share thoughts, stories, and experiences.  
                        Dive into a collection of posts written by passionate authors,  
                        and feel free to contribute your own insights!  
                        A place to share thoughts, stories, and experiences.  
                        Dive into a collection of posts written by passionate authors,  
                        and feel free to contribute your own insights!                  
                    </p>
                </div>
                <div className="text-box">
                    <h1 className="box-title">Features of This Blog</h1>
                    <hr className="box-divider" />
                    <div className="box-text">
                        <ul>
                            <li>Create and publish your own posts</li>
                            <li>Read posts from other users</li>
                            <li>Easily delete posts you no longer need</li>
                        </ul>
                        Ready to share your thoughts?<br></br>
                        Head over to the New Post page to get started!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
       