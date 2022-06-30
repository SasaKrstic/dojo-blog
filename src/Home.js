
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem...', author: 'Sasa', id: 1 },
    { title: 'Welcome party!', body: 'lorem...', author: 'Mario', id: 2 },
    { title: 'Web dev top tips', body: 'lorem...', author: 'Luigi', id: 3 },
    { title: 'Moj prvi react kurs', body: 'lorem  ipsum ...', author: 'Sasa', id: 4 },
  ]);
  
  const [name, setName] = useState('Mario');
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  
  useEffect(() => {
    console.log('use Effect ran');
    // console.log(blogs);
    console.log(name);
  }, [name]);
   
    
    return(
      <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
          <BlogList blogs={blogs.filter((blog) => blog.author === 'Sasa' )} title="Sašini Blogovi!" />
          <button onClick={() => setName('Nenad')}>Promeni ime</button>
          <h3>{name}</h3>
      </div>  
    );
}
/* blogs={blogs}>  je prop
title je all blogs STRING */
export default Home; 