import React, { useState } from "react";
import "../styles/Home.css";
import Task from "./Task";


export const Home = () => {
  const [tasks,setTasks]=useState([]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{
      title:title,
      description:description
    }]);
    setTitle("");
    setDescription("");
  };
  const deleteTask=(index)=>{
    const newArr=tasks.filter((item,i)=>{
      return i!==index;
    });
    setTasks(newArr);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <h1>Daily Goals🖋️</h1>
          <input 
          type="text" 
          required="true"
          placeholder="Title" 
          value={title} 
          onChange={(e)=>{setTitle(e.target.value)}} />

          <textarea 
          placeholder="Description" 
          value={description} 
          required="true"
          onChange={(e)=>{setDescription(e.target.value)}}>            
          </textarea>

          <button type="submit">Add Task</button>
        </form>

        {tasks.map((item,index)=>{
          return(
            <Task 
            key={index} 
            title={item.title} 
            description={item.description}
            deleteTask={deleteTask}
            index={index}
            />
          )
        })}
       
      </div>
    </>
  );
};
