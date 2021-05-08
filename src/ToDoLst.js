import React,{ useState } from 'react';

const ToDoLst=(props)=>{

    var [clicked,setIsClicked]=useState(false);
    const complete=() =>{
        setIsClicked(true);
    };
    return(
    <>
    <div className="division">
        <input type="checkbox" className="align" onClick={complete}></input>
        <li className="set" style={{textDecoration: clicked ? "line-through" : "none"}}>
        {props.text}</li>
        <i class="fa fa-thumbs-up" aria-hidden="true" style={{visibility : clicked ? "visible":"hidden"}}></i>
        <i className="fa fa-thumbs-down" aria-hidden="true" style={{visibility : clicked ? "hidden":"visible"}}></i>    
    </div>
    </> 
    );
};
export default ToDoLst;

