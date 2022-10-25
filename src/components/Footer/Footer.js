import React from 'react';
import {Link} from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        
        <footer className="d-flex justify-center justify-content-between bg-primary text-light ps-5 ">
        <div className='d-flex justify-center my-5 '>
        <p className='mx-3'>Google</p>
			<p className='mx-3'>Github</p>
			<p className='mx-3'>Facebook</p>
			<p className='mx-3'>Twitter</p>
			<p className='mx-3'>FaTwitch</p>
        </div>
    
    <div className=' text-light pe-5 my-5'>
      <Link className='mx-3 '><FaGoogle className='text-light  '></FaGoogle> </Link>
      <Link className='mx-3'><FaGithub className='text-light  '></FaGithub> </Link>
      <Link className='mx-3'><FaFacebook className='text-light  '></FaFacebook></Link>
      <Link className='mx-3'><FaTwitter className='text-light '></FaTwitter></Link>
      <Link className='mx-3'><FaTwitch className='text-light '></FaTwitch></Link>
     
    </div>
        </footer>


      

    );
};

export default Footer;