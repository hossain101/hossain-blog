import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "shoaib",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "hossain",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "sabit",
      id: 3,
    },
  ]);

  const [name, setName] = useState("shoaib");



  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  }, []);



  return (
    <div className="home">``
      <h2>Home Page</h2>
        <BlogList blogs={blogs} title = "All Blogs" handleDelete = {handleDelete}/ >

          <button onClick={()=>setName("Anwar")}>change name</button>
          <p>{name}</p>
    </div>
  );
};

export default Home;
