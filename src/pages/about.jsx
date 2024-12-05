import React from 'react';
// import avatar from '../assests/images/avatar-25595a2d.png';
import techboy from '../assests/images/techboy.gif';
function about() {
    return (
        <div className='common-spacing'>
            <h1 className="heading">Introduction</h1>
            <h2 className="heading">Overview.</h2>
            <div className="d-flex flex-wrap">
                <div className="firstHand col-lg-6 col-md-12">
                <p className='aboutInfo'>
                I'm a tech explorer with a Computer Science background and a dash of magic! 🎩🌟 
                Currently mastering the mysterious realms of Full Stack World. 
                Beyond coding, I'm a curious chameleon, mastering adaptability, complex decisions, and top-notch
                communication.
            </p>
                </div>
                <div className="secondHand col-lg-6 ">
                    <img src={techboy} alt='techboy' className='w-100' />
                </div>
            </div>
        </div>
    )
}

export default about;