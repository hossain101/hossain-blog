import { useState } from "react";
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

  return (
    <div className="home">
      <h2>Home Page</h2>
        <BlogList blogs={blogs} title = "All Blogs"/ >
    </div>
  );
};

export default Home;
