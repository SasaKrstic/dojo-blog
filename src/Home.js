
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  
  const [blogs, setBlogs] = useState(null);
  //brisemo prethodni niz, ne koristimo ga, stavljamo da je niz value null, zatim u useEffect ubacujemo
  const [isPending, setIsPending] = useState(true);
  
  const [name, setName] = useState('Mario');
  

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      });
    }, 1000);
  }, []);
   
    
    return(
         <div className="home">
            {isPending &&  <div>LOADING...</div>}
            {blogs &&  <BlogList blogs={blogs} title="All Blogs!" />}
            <button onClick={() => setName('Nenad')}>Promeni ime</button>
            <h3>{name}</h3>
        </div>  
    );
}

// { blogs &&  <BlogList blogs={blogs.filter((blog) => blog.author === 'Sasa' )} title="Sašini Blogovi!" />}
/* blogs={blogs}>  je prop
title je all blogs STRING */
export default Home; 