
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem...', author: 'Sasa', id: 1 },
    { title: 'Welcome party!', body: 'lorem...', author: 'Mario', id: 1 },
    { title: 'Web dev top tips', body: 'lorem...', author: 'Luigi', id: 1 },
  ]);
  
  
   
    
    return(
      <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" />
      </div>  
    );
}
/* blogs={blogs}>  je prop
title je all blogs STRING */
export default Home; 