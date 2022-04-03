import React, {useState} from "react";
import { useLocation } from 'react-router-dom'

import Comment from "../components/Comment";



function Video(){
    
    
    
    const location = useLocation();
    const { iframe } = location.state;

    const [newComment, setNewComment] = useState({
        name:"",
        text:""
    });
    const [comments, setComments] = useState([]);

    const addComment = (event)=>{
        event.preventDefault();
        if(newComment.text!==""){
            setComments([...comments, newComment]);
        }
        
        setNewComment({
            name:"",
            text:""
        });
    }

   


    
    return(
        <div>
            <div className = "mw5 mw7-ns center  pa3 ph5-ns">
                 <iframe  className = "video" width="560" height="315" src={iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Comment setNewComment={setNewComment} onClick={addComment} comments={comments} newComment={newComment} />
        </div>
    );

}

export default Video;