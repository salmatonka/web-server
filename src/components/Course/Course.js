import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"
const Course = () => {
const [courses,setCourses] = useState([])
 useEffect(()=>{
    fetch('http://localhost:5000/details-courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))
 })

    return (
        <div className='left-container'>
        <div className="cart-container">
     <h1>helll</h1>
 
        </div>
       <div className="right-container">
     <h1>All Courses:{courses.length}</h1>
     {
        courses.map(course=><p key={course.id}><Link to={`/course/${course.id}`}>{course.name}</Link></p>)
     }
     </div>
     </div>
    );
};

export default Course;