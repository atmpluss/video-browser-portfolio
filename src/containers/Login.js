import React,{useState} from "react";
import {info} from "../data/userInfo"
import './Login.css';
var _=require("lodash");


function Login({setVerification}){
    const[userInfo, setUserInfo]=useState({
        username:"",
        password:""
    })

    const[error, setError]=useState("");
    


    const changeHandler=(event)=>{
        const{value, name}=event.target;
       
        setUserInfo(prevInfo=>{
            return{
                ...prevInfo,
                [name]:value
            }
        })
        
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        _.isEqual(userInfo,info) ? setVerification(true): (
            setVerification(false));

        if(_.isEqual(userInfo,info)){
            setVerification(true)

        }else{
            setVerification(false);
            setError("Wrong username or password, please try again!")
        }
         
    }
   


    return(
        <div className="loginPage tc ">
            <h2>Please Login</h2>
            <h4>{error}</h4>
            
            <form className=" ma8  loginform" onSubmit={submitHandler}>
                <div className="form-group row ma3 ">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" name="username" required autoComplete="off" placeholder="username..." onChange={changeHandler} />
                    </div>
                </div>
                <div className="form-group row ma3">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" required autoComplete="off" placeholder="password..." onChange={changeHandler} />
                    </div>
                </div>
                

                    <div className="form-group row ma2">
                        <div className="col-sm-12">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </div>
                
                
            </form>

            <footer>username=admin and password=admin</footer>

            
           
            
        </div>
    );
}


export default Login;