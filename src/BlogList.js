const BlogList = ({blogs, title, handleDelete}) => {
    
    // const blogs = props.blogs;
    // const title = props.title;
    //ove const se moze napisati kao iznad u blogList    
    // console.log(props, blogs);
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <span>Writen by {blog.author}</span>
                </div>
            ))}
        </div>
    );
}
//                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>

export default BlogList;

