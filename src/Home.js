import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

 

  const[isPending, setIsPending] = useState(true);

  const[error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      }).catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      })
  }, []);

  return (
    <div className="home">
      
      <h2>Home Page</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
     
      
    </div>
  );
};

export default Home;
