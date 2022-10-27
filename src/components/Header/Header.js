
import { Link} from 'react-router-dom';
import React, { useContext } from 'react';
import { FaAsymmetrik, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../contexts/UserContext';
import {toast} from 'react-toastify';
const Header = () => {
     
       const {user,logout } = useContext(AuthContext)
         
	   const handleLogout = () =>{
		logout()
		.then(toast.warning('logout !!'))
		.catch(error=>console.log(error))
	   }

	   
	   console.log(user)

  return (
    <header className="p-4  bg-sky-200 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		
	<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">	
    <FaAsymmetrik className='w-10 h-10'></FaAsymmetrik>
      <span className='ml-3 text-xl fw-bolder'>Web Technology Tutorials </span>
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
			</li>

			<li className="flex">
				<Link rel="noopener noreferrer" to="/faq" className="flex items-center px-2 -mb-1 dark:border-transparent">FAQ</Link>
			</li>

			<li className="flex">
				<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-2 -mb-1 dark:border-transparent">Blog</Link>
			</li>
		</ul>

          {user?.email ? <><li className="flex">
				<Link rel="noopener noreferrer" to="/course" className="flex items-center pe-10 dark:border-transparent">Course</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/courseDetails" className="flex items-center   dark:border-transparent">CourseDetails</Link>
			</li>
			<Link to='/login'>
			<button onClick={handleLogout} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Logout</button>

            </Link>
           
	<div>
       <span > <img src={user?.photoURL

	    ? user.photoURL

	    :<FaUserAlt></FaUserAlt> }
	   alt=""
	  style={{height:'40px'}}/> </span>
	   
     <h4>{
	  user?.displayName ? user.displayName:'name Not Found'}</h4>

	</div>


			</>
			:
			
			<Link to='/login'><button className="self-center px-5 py-3 rounded">Login</button>
            </Link>
			}
                
	</div>
	</header>
  );
};

export default Header;














