// Home.js --> Displays a welcome message.
import React from 'react';
import "./Home.css"; 

function Home() {
    const bannerItems = ['Thoughts', 'Stories', 'Code'];

    return ( 
        <div className="home-container">
            <div className="block1">
                <div className="hero-wrapper">
                    <div className="decorative-circle"></div>
                    <div className="title-wrapper">
                        <h1>Welcome to My Blog</h1>
                        <p className="hero-subtitle">Sharing ideas, code, and creativity</p>
                    </div>
                </div>
            </div>
            <div className="block2">
                <div className="banner-track">
                    {/* Render content twice */}
                    {[1, 2].map((copy) => (
                        <div 
                            className="banner-content" 
                            key={copy}
                            aria-hidden={copy === 2 ? "true" : undefined}
                        >
                            {/* Repeat items twice within each copy */}
                            {[...bannerItems, ...bannerItems, ...bannerItems].map((item, index) => (
                                <React.Fragment key={index}>
                                    <h4>{item}</h4>
                                    <img src="/images/flower2.png" alt="flower" className="flower" />
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="block3">
                <div className="text-box">
                    <h1 className="box-title">About This Project</h1>
                    <hr className="box-divider" />
                    <p className="box-text">
                        I created this blog application to demonstrate my React development 
                        skills. Every component was built from scratch with attention to user 
                        experience and responsive design. With this project, I intended to explore 
                        React's component architecture and state management. This project demonstrates 
                        my ability to create full CRUD functionality with a clean, flexible interface.
                
                    </p>
                </div>
                <div className="text-box">
                    <h1 className="box-title">Features of This Blog</h1>
                    <hr className="box-divider" />
                    <div className="box-text">
                        <ul>
                            <li>Dynamic post creation with form validation</li>
                            <li>Real-time state updates</li>
                            <li>Mobile-responsive design</li>
                            <li>Clean, accessible navigation</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
       