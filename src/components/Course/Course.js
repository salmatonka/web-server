import React from 'react'; 
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import Details from '../Details/Details';




import "./Course.css"
const Course = () => {
    
     const allItems = useLoaderData();
     
   
    return (

  <div className='container'>
   <div className='row gap-3'>


     <h1 className='text-2xl font-semibold px-8'>All Courses:{allItems.length}</h1>
  
    {
    allItems.map(items=><CourseDetails 
      key={items._id}
      items={items}
    ></CourseDetails>)
    }
  
  </div>

   <div className=''>

   
   </div>

</div>
    


        
    );
};

export default Course;