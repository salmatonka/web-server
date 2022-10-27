import React from 'react';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import Topics from '../Topics/Topics';

import "./Course.css"
const Course = () => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/courses')
       .then(res=>res.json())
       .then(data=>setCourses(data))
     })
  
   
    return (

<div className='left-container'>
       <div className="cart-container">
<h1>helll</h1>
<Topics></Topics>


       </div>

<div className="right-container">
<h1>All Courses:{courses.length}</h1>
 {
    courses.map(course=> <h4><Link to={`/course/${course.id}`}>{course.name}</Link></h4> )
 }


</div>
    </div>


        
    );
};

export default Course;