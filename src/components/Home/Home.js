import React from 'react';
import'./Home.css';

import {Link} from 'react-router-dom';


const Home = () => {

  


    return (
    <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
        
        <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900'>Web technology</h1>
            <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>Web Technology refers to the various tools and techniques that are utilized in the process <br />
             of communication between different types 
                 of devices over the internet.<br /> A web browser is used to access web pages.Web browsers <br />can be defined as programs that display text, data, <br /> pictures, animation, and video on the Internet.</p>
                 <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-gray-900 hover:bg-gray-700 text-gray-100'
            >
              Back to homepage
            </Link>

        </div>
              
    
    );
};

export default Home;