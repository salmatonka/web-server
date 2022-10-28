import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({items}) => {
    const {name} = items;
    return (
          
          <div className="max-w-xs rounded-md shadow-md bg-sky-200 my-5 dark:text-gray-100">
	
	    <div className="flex flex-col justify-between p-6  space-y-8">
		<div className="space-y-2">
        <p className="text-2xl font-semibold tracking-wide">
            <Link to="/">{name}</Link>
            
        </p>
			
		</div>
		</div>

</div> 
  

     
	  
       
    );
};

export default CourseDetails;