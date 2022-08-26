import { useState } from "react";

const Create = () => {
  const [ title,  setTitle] = useState('');
  const [ body, setBody] = useState('');
  const [ author, setAuthor] = useState('Mario');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const blog = { title, body, author };
    
    console.log(blog);
  }
  
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
        required 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
        &nbsp;
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}
 
export default Create;