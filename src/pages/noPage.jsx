import React from 'react';
import lostPage from '../assests/images/404/404Page.gif';
import { Link } from 'react-router-dom';

function LostPage() {
  return (
   <div className='main-section common-spacing'>
     <div className='pageNotWorking'>
      <div className='text-center'>
        <h3 className="heading mb-24">
          Looks like you're lost
          the page you are looking for not available !
        </h3>
       
      </div>
      <div className='mb-24'>
        <img src={lostPage} alt="" srcset="" className='noFound' />
        
      </div>
      <Link to={'/'}><button className="btn-style-1">Go To Home</button></Link>
    </div>
   </div>
  )
}

export default LostPage;