import React from 'react';
import heroImg from '../assests/images/Vector.png';
import { Link } from 'react-router-dom';
// import projectCover from '../assests/images/projectCover.jpeg';
import Card from '../components/cards/card';
import logo from '../assests/images/travelCardImg.jpg';
import rightArrow from '../assests/images/icons/right-arrow.png';
import DevCard from '../components/cards/devCard';
import dbImg from '../assests/images/projectCover.jpeg';
import javaImg from '../assests/images/backendImg.png';
import frontENd from '../assests/images/frontend.png';

export default function home() {
    return (
        /*hero section*/
        <div className="main-section common-spacing">
            <div className="hero-content ">
                <div className="hero-left col-lg-5 col-md-6">
                    <h2 className="heading">
                        I'm a Software Engineer.
                    </h2>
                    <h4>
                        <b>Currently, on exploring and learning phase,</b>
                    </h4>
                    <p className='subheading'>
                        A self-taught Software Engineer, functioning in the industry for 5 months now.
                        I make meaningful and delightful websites and backends that create an equilibrium
                        between user needs and business goals.
                    </p>
                </div>
                <div className="hero-rigth  col-lg-7 col-md-6">
                    <img src={heroImg} alt='heroImg' className='hero-right-img' />

                </div>
            </div>
            {/* project parts */}
            <div className="projectPortion">
                <div className="leftHand ">
                    <div >
                        <h3 className="heading">
                            My projects
                        </h3>
                    </div>

                    <div className="next-page-link ">
                        <Link to={'/projects'}>
                            <img src={rightArrow} alt="" className='rightArrowImg' />
                        </Link>
                    </div>
                </div>
                <div className="rightHand d-flex">
                    <div className="project-contents col-lg-7">
                        <h4 style={{color:'white'}} className='subheading'>
                            Projects made so far which helped me improve my coding skills
                        </h4>
                    </div>
                    <div className="project-img col-lg-5">
                        {/* <img src={projectCover} alt="" className='w-100'  /> */}
                        <Card
                            title={'Tours & Travels'}
                            description={' Developed a responsive website providing information on global travel destinations and facilities'}
                            imageUrl={logo}
                            buttonText={'Learn More'}
                        />
                    </div>
                </div>
            </div>

            <div className="skillSection">
                <h3 className="heading">
                    My Skills
                </h3>
                <div className="  skillsCardSection ">
                    {/* first card skillsCardSection flex-wrap */}
                    <DevCard
                        developer={'Frontend Developer'}
                        skills={'Html,Css,JS,ReactJS'}
                        imageUrl={frontENd}
                    />

                    <DevCard
                        developer={'Backend Developer'}
                        skills={'Java,springboot,rest apis'}
                        imageUrl={javaImg}
                    />

                    <DevCard
                        developer={'Database Developer'}
                        skills={'MySql,Sql+'}
                        imageUrl={dbImg}
                    />
                </div>
            </div>
        </div>
    )
}
