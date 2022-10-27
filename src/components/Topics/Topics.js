import React, { useEffect, useState } from 'react';

const Topics = () => {
  
  const [details,setDetails] = useState([])

  useEffect(()=>{
     fetch('http://localhost:5000/details')
     .then(res=>res.json())
     .then(data=>setDetails(data))
   })


    return (
        <div className='col-md-4' >
        
 <h1>All Courses:{details.length}</h1>
     
  {
    details.map(detail=><p key={detail}
    detail={detail}
    
    >{details.title}</p>)
  }

     </div>
    
    );
};

export default Topics;