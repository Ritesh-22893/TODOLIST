import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className=' bg-indigo-800 text-gray-300 text-opacity-90 py-4'>
      <div className='px-6 sm:px-2 md:px-12 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center'>
        <div className=' md:text-left sm:text-sm'>
          <h2 className='text-2xl font-extrabold'>Contact Me</h2>
          <div className='text-start mt-2'>
            <p className='text-sm md:text-lg font-medium'><FontAwesomeIcon icon={faEnvelope} /> Gmail: riteshpokhrel73@gmail.com</p>
            <p className='text-sm md:text-lg font-medium'><FontAwesomeIcon icon={faPhone} /> Phone: +977 9815461099</p>
          </div>
        </div>

        <div className='my-2 sm:mb-8 md:my-0 flex flex-col sm:gap-2'>
          <h2 className='text-start text-2xl font-extrabold'>Follow Me </h2>
          <div className='mt-2 flex space-x-8'>
            <a href='https://github.com/Ritesh-22893'>
              <FontAwesomeIcon icon={faGithub} className='text-2xl' />
            </a>
            <a href='https://linkedin.com'>
              <FontAwesomeIcon icon={faLinkedin} className='text-2xl' />
            </a>
            <a href='https://www.facebook.com/ritesh.pokherel'>
              <FontAwesomeIcon icon={faFacebook} className='text-2xl' />
            </a>
          </div>
        </div>

        <div className='sm:text-right'>
          <p className='text-sm sm:text-sm md:text-xl font-bold'>&copy; 2024 TodoList. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;



