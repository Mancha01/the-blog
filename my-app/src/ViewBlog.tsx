import { ViewProps } from "./interfaces";

function ViewBlog({blogs} : ViewProps) {
    return ( 
        <div className="views">
 {
     blogs.map((blog) => (
         <div className="views-preview" key={blog.id}>
<article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
        </article>
         </div>
     ))
            
        }
        </div>
       
        
     );
}

export default ViewBlog;