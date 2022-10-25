
import { Link} from 'react-router-dom';
import React from 'react';
import { FaAsymmetrik } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="p-4  bg-sky-200 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
			
    <FaAsymmetrik className='w-10 h-10'></FaAsymmetrik>
      <span className='ml-3 text-xl fw-bolder'>Web Technology Tutorial</span>
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/courses" className="flex items-center px-4 -mb-1 dark:border-transparent">Courses</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/details" className="flex items-center px-4 -mb-1 dark:border-transparent">Details</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 dark:border-transparent">Blog</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
	   <Link to='/logout'>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Logout</button>

        </Link>

       <Link to='/login'><button className="self-center px-8 py-3 rounded">Login</button>
	   </Link>

			
		</div>
	
	</div>
</header>
  );
};

export default Header;














