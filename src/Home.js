import { useState } from "react";


const Home = () => {

    

   const [name, setName] =  useState('shoaib');

   const[age , setAge] = useState(17);

    const handleClick = () => {
        setName('shoaib hossain');
        setAge(20);

    }

    //this is to show that we can call a function inside a function without invoking it by using arrow function. we can even access its event object.
    const handleClickAgain = (name,e) => {
        console.log('hello ' + name+ e.target);
        console.log("Age : " + age);
    }




  return (
    <div className="home">
      <h2>Home Page</h2>
        <p>{name}</p>
        <p>age: {age}</p>
      <button onClick={handleClick}>Click</button>
        <button onClick={(e) => {
            handleClickAgain('shoaib',e);
        }}>Click Again</button>
    </div>
  );



};

export default Home;
