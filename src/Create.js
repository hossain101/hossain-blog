
import { useState } from "react";



const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                {/* In the onChange we get back an annonymous function and this function has properties we can access. */}
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
              <input type="text" required value = {author} onChange={(e)=>setAuthor(e.target.value)} />
                <button>Add Blog</button>

                {/* <p>{title}</p>
                <p>{body}</p> */}

            </form>
        </div>
     );
}
 
export default Create;