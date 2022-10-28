import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const Topics = () => {
  
    const allCourses = useLoaderData();
     
    return (
       <div>
    {
			allCourses.length
		}

      <p>
	  {
      allCourses.map(course=><Details key={course}
	  courses={course}></Details>)
      
	  }
	  </p>

     </div>
    
    );
};

export default Topics;