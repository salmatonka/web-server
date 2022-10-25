import React from 'react';


const Blog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<h1 className="text-2xl font-bold  hover:underline"> Questions & Answers: 4</h1>
		<div className="mt-3">
			<h1 className=" text-2xl font-bold hover:underline">1. what is cors?</h1>
			<p className="mt-2"> <code className='text-sky-600 text-1xl '> Answer:</code> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
		</div>
		
		
		<div className="mt-3">
			<h1 className="text-2xl font-bold hover:underline">2. Why are you using firebase?What other options do you have to implement authentication?</h1>
			<p className="mt-2"><code className='text-sky-600 text-1xl '> Answer:</code> Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here.
			<br />
			Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
			</p>
		</div>
		
		
		<div className="mt-3">
			<h1 className="text-2xl font-bold hover:underline">3. How does the private route work?</h1>
			<p className="mt-2"><code className='text-sky-600 text-1xl '> Answer:</code> The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
		</div>
		
		
		<div className="mt-3">
			<h1 className="text-2xl font-bold hover:underline">4. What is Node? How does Node work?</h1>
			<p className="mt-2"><code className='text-sky-600 text-1xl '> Answer:</code>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
			<br />
			It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
			
			</p>
		</div>
		
		</div>
	</div>

)

};

export default Blog;