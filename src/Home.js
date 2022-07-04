
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState('Mario');

  useEffect(() => {
    setTimeout(() => {
      
    fetch('http://localhost:8000/blogs')
      .then(res => {
        console.log(res);
        
        if (!res.ok){
          throw Error('Ne mozemo fetchovati podatke za taj izvor');
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
        
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, 1000);
  }, []);
  
   
    
    return(
      <div className="home">
          {error && <div>{ Error } </div>}
          {isPending && <div>LOADING...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
          <button onClick={() => setName('Nenad')}>Promeni ime</button>
          <h3>{name}</h3> 
      </div>  
    );
}
/* blogs={blogs}>  je prop
title je all blogs STRING */

export default Home; 