
import { useState } from 'react';

function Home() {
   const [blogs, setBlogs] = useState(
    [
        { title: 'The new Dawn', body: 'lorem ipsum...', author: 'Mancha', id: 1 },
        { title: 'The Nigerian Dream!', body: 'Create Magic...', author: 'Pam', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
      ]
   );


    return (  
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>

                    </div>
                ))
            }
        </div>
    );
}

export default Home;