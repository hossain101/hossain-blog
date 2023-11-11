import { useState } from "react";
import { useHistory } from "react-router-dom";



//using useState hook you could see the page being updated in real time as you type in the input fields if you put the title author in a p tag. This is because useState causes a re-render every time its setter function is called. In contrast, changing the value of a useRef does not cause a re-render. In your case, the values of title, body, and author are only needed when the form is submitted, so there’s no need for the component to re-render every time these values change.

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const getLastBlogId = async () => {
        const response = await fetch('http://localhost:8000/blogs').catch((err) => {
            console.log(err.message);
        });
        const data = await response.json();
        return data.length;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            console.log('new blog added');
        }).catch((err) => {
            console.log(err.message);
        });

      

        const lastBlogId = await getLastBlogId();
        history.push(`blogs/${lastBlogId }`);
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

//Alternate version better performance
// In terms of performance and resource utilization, using useRef can be more efficient than useState in this specific scenario. Here’s why:

// Re-rendering: useState causes a re-render every time its setter function is called. In contrast, changing the value of a useRef does not cause a re-render. In your case, the values of title, body, and author are only needed when the form is submitted, so there’s no need for the component to re-render every time these values change.

// Memory usage: useState creates a new copy of the state every time it’s updated, which can increase memory usage if the state updates frequently. On the other hand, useRef uses the same reference throughout the component lifecycle, so it’s more memory-efficient.

// Simplicity: Using useRef simplifies the code by removing the need for setter functions. This can make the code easier to read and maintain.

// However, it’s important to note that useState and useRef serve different purposes and their usage depends on the specific requirements of your component. If you need to track changes and re-render the component when a value changes, useState is the appropriate choice. If you just need to store a mutable value that doesn’t trigger a re-render, useRef is a better option. In your case, since the values of title, body, and author don’t need to trigger a re-render, useRef is the more efficient choice.

// import { useRef,useState } from "react";
// import { useHistory } from "react-router-dom";

// const Create = () => {
//     const titleRef = useRef();
//     const bodyRef = useRef();
//     const authorRef = useRef();
//     const [isPending, setIsPending] = useState(false);
//     const history = useHistory();

//     const getLastBlogId = async () => {
//         const response = await fetch('http://localhost:8000/blogs').catch((err) => {
//             console.log(err.message);
//         });
//         const data = await response.json();
//         return data.length;
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const blog = { 
//             title: titleRef.current.value, 
//             body: bodyRef.current.value, 
//             author: authorRef.current.value 
//         };

//         setIsPending(true);

//         await fetch('http://localhost:8000/blogs', {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(blog)
//         }).then(() => {
//             setIsPending(false);
//             console.log('new blog added');
//         }).catch((err) => {
//             console.log(err.message);
//         });

//         const lastBlogId = await getLastBlogId();
//         history.push(`blogs/${lastBlogId}`);
//     }

//     return (
//         <div className="create">
//             <h2>Add a New Blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog title:</label>
//                 <input type="text" required ref={titleRef} />
//                 <label>Blog body:</label>
//                 <textarea required ref={bodyRef}></textarea>
//                 <label>Blog author:</label>
//                 <input type="text" required ref={authorRef} />
//                 {!isPending && <button>Add Blog</button>}
//                 {isPending && <button disabled>Adding Blog...</button>}
//             </form>
//         </div>
//     );
// }

// export default Create;


export default Create;
