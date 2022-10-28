import React from 'react';
import { Link } from 'react-router-dom';



const Details = ({course}) => {
    
    const {name,img,details,course_duration} = course;
  
    return (
       <div >
        
        
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={img}  alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p>course_duration:{course_duration}</p>
			<p className="dark:text-gray-100">{details}</p>
		</div>
		<Link
              to='/courseDetails'
              className='w-full text-center px-8 py-3 font-semibold rounded-md bg-sky-400 hover:bg-sky-900 hover:text-white text-black-100'
            >
               Read More
            </Link>
	</div>
</div>
     
  

     </div>
    );
};

export default Details;