
import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  //ove se prebacuju u custom hooks js

  const [name, setName] = useState('Mario');

 const { data: blogs, isPending, error} = useFetch('http:://localhost:8000/blogs');
 //data: blogs, znaci da uzmemo data da je nazovemo blogs
   

  
   
    
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