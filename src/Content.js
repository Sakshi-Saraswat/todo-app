
import React, { useState } from 'react';
import ToDoLst from './ToDoLst';

const Content=() =>{
    const [item,setItem] = useState(" ");
    const itemEvent=(event)=>{
        setItem(event.target.value);
    };
    const [newitem, setnewitem] = useState([])
    const listOfItem = () =>{
        setnewitem((prevValue)=>{
            return [...prevValue,item];
        });
    };
    
    
    
    return (
        <>
        <div className="task">
            <input type="text" className="taskBar" placeholder="Enter your Task" onChange={itemEvent}></input>
            <button className="size" onClick={listOfItem}>+</button>
            <hr></hr>
            <ul>
                {newitem.map((val)=>{
                    return <ToDoLst text={val} />;
                    
                })}
                
            </ul>
           
        </div>
       
       
        </>
    );
};
export default Content;