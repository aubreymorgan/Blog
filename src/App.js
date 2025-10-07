import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navbar/Navbar.js";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import NewPost from "./pages/NewPost.js";

function App() {

  const [posts, setPosts] = useState([]); 

  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>       
        <Route path = "/"         element = {<Home />} /> 
        <Route path = "/blog"     element = {<Blog posts = {posts} setPosts = {setPosts}/>} /> 
        <Route path = "/newPost"  element = {<NewPost setPosts = {setPosts} />} /> 
        <Route path = "*"         element = {<h1>404 - Page Not Found.</h1>} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
