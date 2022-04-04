import React, {useState} from 'react';
import './App.css';
import Home from "./Home.js"
import Video from "./Video.js"
import Login from './Login';
import {Routes,Route} from 'react-router-dom';





function App() {
  

  
  const[verification, setVerification]=useState(false);

  return (
    <div className="App">
    {
      !verification? (<Login  setVerification={setVerification} />):(
      <Routes>
        <Route path="/video-browser-portfolio" element={<Home  />} />
        <Route path="/video-browser-portfolio/video" element={<Video />} />
        <Route path="*" component={<Home  />} />
     </Routes>

      )
    }
       
    </div>
  );
}

export default App;
