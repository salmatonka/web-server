import React, { useEffect, useState } from 'react';

const Topics = () => {
    const [courses,setCourses] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/details-courses')
    .then(res=>res.json())
    .then(data=>console.log(data))
  } )


    return (
        <div className='left-container'>
        <div className="cart-container">
 <h1>helll</h1>
 
        </div>
       <div className="right-container">
 <h1>All Courses:</h1>
     
     </div>
     </div>
    );
};

export default Topics;