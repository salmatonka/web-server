import React from 'react';
import'./Home.css';

import {Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
    <div className='home-container'>
        <div className='text-center fs-3'>
        <h1 className='text-center'>Web technology</h1>
            <p>Web Technology refers to the various tools and techniques that are utilized in the process <br />
             of communication between different types 
                 of devices over the internet.<br /> A web browser is used to access web pages.Web browsers <br />can be defined as programs that display text, data, <br /> pictures, animation, and video on the Internet.</p>
            <Button variant="primary">Primary</Button>

        </div>
            
          
            </div>
       

     
          
        
        
    
    );
};

export default Home;