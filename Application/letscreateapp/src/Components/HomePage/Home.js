import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="main-con">
     <Navbar/>
      <div className='main'>
        <h1>Welcome to our LetsCreate</h1>
        <form method="post" action="#" id="#"> 
           <div class="form-group files">
             <label>Upload Your File </label>
             <input type="file" class="form-control" multiple=""/>
           </div>
       </form>  
      </div>
    </div>
    
  )
}

export default Home


       