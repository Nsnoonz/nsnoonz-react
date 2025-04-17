import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import ImgProfile from '../assets/profile/me-2.jpg';
const Project: React.FC = () => {
  return (
    <>
      <div className="py-20">
        <div className='mx-auto border-2 h-full col-8'>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          Seach <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default Project;