import React,{useState} from "react";
import "tachyons"



function Comment({setNewComment, onClick, comments, newComment}){
    const [toggle,setToggle]=useState(false);

    const changeHandler=(event)=>{
        const {name, value}=event.target;
        setNewComment(preval=>{
            return{
                ...preval,
            [name]:value
            }
        })

    }


    const toggleHandle = ()=>{
        setToggle(value=>{
            return !value;
        })
    }
    

    

    return(
        <div className="Comment ">
            <form  className =" " onSubmit={onClick}>
            <div className="ma3">
            <label htmlFor="name" className="db">Name:</label>
            <input onChange={changeHandler} id="name" placeholder="Add your name..." name="name" autoComplete="off" value={newComment.name}  />
            </div>

            <div  className="ma3">
                <label htmlFor="comment" className="db ">Comment:</label>
                <input onChange={changeHandler} id="comment" className="w-50" placeholder="Add a new comment..." name="text" autoComplete="off" value={newComment.text}   />
            </div>

            <div>   
                <button type="submit" className="btn w-10 ma3" >Add</button>
                <button onClick={toggleHandle} className=" btn w-10  ">{toggle? "Hide Comments": "Show comments"}</button>
            </div>

            
            </form>

            <div className="commentContainer ">
                <div style={{display: toggle ? "block" : "none"}}>
                {
                
                comments.slice().reverse().map(comment=>{
                    return(
                        <div className=" db pa2 ma2 bg-light-gray" key={Math.random()*1000}>
                            <p className="orange">Name: {comment.name}</p>
                            <p>comment: {comment.text}</p>
                        </div>
                    );
                })}
                </div>
            </div>


            

        </div>
        
    );
}

export default Comment;