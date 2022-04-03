import React, {useState, useEffect, useCallback} from "react";
import Search from '../components/Search';
import ThumbNails from '../components/ThumbNails';
import {data} from "../data/data.js";
import "tachyons"




function Home(){

    const [videos, setVideos]=useState([]);
    const [inputText, setInputText] = useState("");
    const [group, setGroup] = useState("all");
    const [filteredVideos, setFilteredVideos] = useState([]);

    const filterHandler = useCallback(()=>{
        switch(group){
          case "ab":
            setFilteredVideos(videos.filter(item=>item.cathegory==="ab"));
            break;
          case "chest":
            setFilteredVideos(videos.filter(video=>video.cathegory==="chest"));
            break;
          case "back":
            setFilteredVideos(videos.filter(video=>video.cathegory==="back"));
            break;
          case "arm":
            setFilteredVideos(videos.filter(video=>video.cathegory==="arm"));
            break;
    
          default:
             setFilteredVideos(data);
    
    
          
        }
    
        setInputText("");
    
      },[videos, group])
    
    
      const searchHandler=(searchInput)=>{
        if(searchInput===""){
          filterHandler();
        }else{
          setFilteredVideos(videos.filter(video=>{
            return video.title.toLowerCase().includes(searchInput) && (video.cathegory===group || group==="all");
          }
           ));
      
        }
         
      }
    
    
      useEffect(()=>{
        setVideos(data);
      },[]);
    
    
      useEffect(()=>{
        filterHandler();
      }, [filterHandler, group]);

     
    
    return(
        <div className="Home">
            <header className="tc">
                <h1>Video Browser</h1>
            </header>

            <Search setGroup={setGroup} setInputText={setInputText} searchHandler={searchHandler} inputText={inputText}  />
            < ThumbNails data={data} filteredVideos={filteredVideos} />
           
            
        </div>

    );

}

export default Home;