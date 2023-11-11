
import { useState } from "react";



const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const[isPending,setIsPending] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    console.log(blog);

    setIsPending(true);

    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setIsPending(false);
        setTitle('');
        setBody('');
        setAuthor('');
            
    })

}



    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                {/* In the onChange we get back an annonymous function and this function has properties we can access. */}
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
              <input type="text" required value = {author} onChange={(e)=>setAuthor(e.target.value)} />
               { !isPending&&<button>Add Blog</button>}
               { isPending&&<button disabled>Adding Blog...</button>}


                {/* <p>{title}</p>
                <p>{body}</p> */}

            </form>
        </div>
     );
}
 
export default Create;