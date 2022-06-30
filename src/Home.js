
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs, setBlogs] = useState(null);
  //brisemo prethodni niz, ne koristimo ga, stavljamo da je niz value null, zatim u useEffect ubacujemo
  
  const [name, setName] = useState('Mario');
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlogs(data);
    });
  }, []);
   
    
    return(
      <div className="home">
         { blogs &&  <BlogList blogs={blogs} title="All Blogs!" />}
          <button onClick={() => setName('Nenad')}>Promeni ime</button>
          <h3>{name}</h3>
      </div>  
    );
}

// { blogs &&  <BlogList blogs={blogs.filter((blog) => blog.author === 'Sasa' )} title="Sašini Blogovi!" />}
/* blogs={blogs}>  je prop
title je all blogs STRING */
export default Home; 