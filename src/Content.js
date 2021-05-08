
import React, { useState } from 'react';

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
    var [clicked,setIsClicked]=useState(false);
    function complete(){
        setIsClicked(true);
    };
    
    return (
        <>
        <div className="task">
            <input type="text" className="taskBar" placeholder="Enter your Task" onChange={itemEvent}></input>
            <button className="size" onClick={listOfItem}>+</button>
            <hr></hr>
            <ul>
                {newitem.map((val,index)=>{
                    return <li className="set" style={{textDecoration: clicked ? "line-through" : "none"}}>
                        <input type="checkbox" onClick={complete}></input> {val} <i class="fa fa-thumbs-down" aria-hidden="true"></i></li>;
                     
                })}
                
            </ul>
        </div>
       
       
        </>
    );
};
export default Content;