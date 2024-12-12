import React from 'react';
import Card from '../components/cards/card';
import logo from '../assests/images/travelCardImg.jpg';
import chat from '../assests/images/chat.png';
import hospital from '../assests/images/hospital.png';

function index() {
  return (
    <div className="common-spacing">
      <h4 className='mb-24 heading'>My Projects <b>Here u go </b></h4>
      <p className='mb-24 topicheading subheading' >Following projects showcases my skills and experience through real-world examples of my work. 
        Each project is briefly described with linkes to code repositories and live demos in it. 
        It reflects my ability to solve complex problems, work with different technologies, and manage 
        projects effectively.</p>
      <div className='row w-100' >
        <div className="col-lg-3 col-md-6 col-sm-12 mb-24">
          <Card
            title={'Tours & Travels'}
            description={' Developed a responsive website providing information on global travel destinations and facilities'}
            imageUrl={logo}
            buttonText={'Learn More'}
          />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-24">
          <Card
            title={'Hospital Management'}
            description={' Developed a  backend system for managing hospital operation and RESTful APIs for CRUD operations on patients, doctors, and appointments'}
            imageUrl={hospital}
            buttonText={'Learn More'}
          />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-24">
          <Card
            title={'Chat Application'}
            description={' Developed a chat screen application for communication'}
            imageUrl={chat}
            buttonText={'Learn More'}
          />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-24">
          <Card
            title={'Tours & Travels'}
            description={' Developed a responsive website providing information on global travel destinations and facilities'}
            imageUrl={logo}
            buttonText={'Learn More'}
          />
        </div>
      </div>
    </div>
  )
}

export default index