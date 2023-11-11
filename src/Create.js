
import { useState } from "react";
import { useHistory } from "react-router-dom";



const Create =  () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();
    let lastBlogId = 0;

// const getLastBlogId = () => {
//     fetch('http://localhost:8000/blogs')
//     .then((res) => {
//         if(!res.ok){
//             throw Error('could not fetch the data for that resource');
//         }
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return data.length;
//     }).catch((err) => {
//         console.log(err.message);
//     })
// }

const getLastBlogId2 = async () => {
    const response = await fetch('http://localhost:8000/blogs');
    const data = await response.json();
    console.log(data.length);
    return data.length;
    
}


 getLastBlogId2().then((data) => {
    lastBlogId = data;
    console.log(lastBlogId);
}).catch((err) => {
    console.log(err.message);
});

const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    console.log(blog);

    setIsPending(true);

   await fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        console.log(lastBlogId);
       
        setIsPending(false);
       

        //Move to the latest BlogDetails component
       // history.push('/blogs/' + getLastBlogId2());
    })
    .catch((err) => {
        console.log(err.message);
    }   
    ).then(() => {
        console.log(lastBlogId);
        console.log('sending to new page');
        
        history.push(`blogs/${lastBlogId+1}`);
    });
    //Move to the latest BlogDetails component
    

    // history.go(-1);//go back to the previous page
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