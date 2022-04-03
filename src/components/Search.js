import React from "react";
import "./Search.css"
import  "tachyons"


function Search({setGroup, setInputText, searchHandler, inputText}){

    const inputTextHandler=(event)=>{
        const {value} = event.target;
        setInputText(value);
        searchHandler(value.toLowerCase());
    };
    
    const groupHandler = e=>{
        setGroup(e.target.value);
    }
    

    return(
        <div className="container pa4 ">

        
         <div className="search row">
                
            <input className="col-9"
                type="text"
                placeholder="Search video..."
                onChange={inputTextHandler}
                value={inputText}
            />

            <select name="todos" className="form-select form-select-sm" onChange={groupHandler}>
                    <option value="all">All</option>
                    <option value="ab">Ab</option>
                    <option value="chest">Chest</option>
                    <option value="back">Back</option>
                    <option value="arm">Arm</option>
            </select>
        </div>
      </div>
    );
}

export default Search;