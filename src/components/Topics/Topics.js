import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';
import CourseDetails from '../CourseDetails/CourseDetails'
import './Topics.css'
import Course from '../Course/Course';
const Topics = () => {
  
    const allCourses = useLoaderData();
     
    return (
		

		<div className='container1'>
		<div className="container2">
     {
			 allCourses.map(course=><Details key={course._id}
				course={course}></Details>)
		}
     
	   </div>
	 <div className="container3">
       <Course></Course>

	 </div>
	 </div>
      
    
    );
};

export default Topics;