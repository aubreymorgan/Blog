import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar/Navbar.js";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import NewPost from "./pages/NewPost.js";

function App() {

  // Demo posts (non-deletable)
  const demoPosts = [
    {
      id: 'demo-1',
      title: "Welcome to My Blog",
      author: "Aubrey Morgan",
      content: 
        "This is a demo post to showcase the blog's functionality. Feel free to explore the features, create your own posts, and see how the delete function works. The two demo posts cannot be deleted. Once you create a post of your own, you will see a delete button on the bottom right corner of your post. This was such a fun project to tackle! I especially had fun getting more familiar with CSS, playing around with animation, and creating my own favicon from scratch. Don't forget to check out my personal links for LinkedIn and GitHub, located on the right-hand side of the navigation bar. Thanks for stopping by, and enjoy! :)",
      timestamp: new Date('2024-03-15T10:30:00').toLocaleString(),
      isDemo: true
    },
    {
      id: 'demo-2',
      title: "Building with React",
      author: "Aubrey Morgan",
      content: "React makes building interactive UIs simple and efficient. In this project, I've implemented dynamic state management, form validation, and responsive design principles. Each post is stored in state and updates are reflected immediately across the application.",
      timestamp: new Date('2024-01-20T14:45:00').toLocaleString(),
      isDemo: true
    }
  ];

  // User-created posts (deletable)
  const [userPosts, setUserPosts] = useState([]);

  // Combine demo and user posts (user posts first, then demo posts)
  const allPosts = [...userPosts, ...demoPosts];

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      isDemo: false
    };
    setUserPosts([newPost, ...userPosts]);
  };

  const deletePost = (id) => {
    // Only delete user posts (demo posts can't be deleted)
    setUserPosts(userPosts.filter(post => post.id !== id));
  };

  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>       
        <Route path = "/"         element = {<Home />} /> 
        <Route path="/blog" element={<Blog posts={allPosts} deletePost={deletePost} />} />
        <Route path="/newPost" element={<NewPost addPost={addPost} />} />
        <Route path = "*"         element = {<h1>404 - Page Not Found.</h1>} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
