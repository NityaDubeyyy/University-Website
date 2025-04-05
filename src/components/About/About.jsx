// import React from 'react'
// import about_img from '../../assests/about.png';
// import play_icon from '../../assets/play_icon.png';

// import './About.css';
// const About = () => {
//   return (
//     <div className="about">

//         <div className="about-left">
//             <img  src={about_img} alt="" className="about-img"/>
            
//             <img  src={icon_png} alt="" className="icon-img"/>
//             </div>

//         <div className="about-right">
//             <h3>ABOUT UNIVERSITY</h3>
//             <h2>Nurturing tommorows leader today!</h2>
//         </div>

//         </div>
//   )
// }

// export default About;


// import React from 'react';
// import about_img from '../../assets/about.png';
// import play_icon from '../../assets/play-icon.png';

// import './About.css';

// const About = ({setPlayState}) => {
//   return (
//     <div className="about">
//       <div className="about-left">
//         <img src={about_img} alt="About University" className="about-img" />
//         <img src={play_icon} alt="Play Icon" className="icon-img " onClick={()=>{
//           setPlayState(true);
//         }} />
//       </div>

//       <div className="about-right">
//         <h3>ABOUT UNIVERSITY</h3>
//         <h2>Nurturing tomorrow’s leaders today!</h2>
//         <p>Our university is committed to academic excellence, innovation, and holistic development. With a world-class faculty, state-of-the-art facilities, and a diverse student community, we strive to nurture the leaders of tomorrow. Our curriculum blends rigorous academics with hands-on learning, ensuring students gain the skills and knowledge needed to excel in their respective fields. We emphasize research, creativity, and real-world problem-solving, empowering our students to make a meaningful impact on society. 
//             Join us in shaping the future and unlocking limitless opportunities for growth and success</p>
//       </div>
//     </div>
//   );
// };

// export default About;


// eslint-disable-next-line
import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Our university is committed to academic excellence, innovation, and holistic development. With a world-class faculty, state-of-the-art facilities, and a diverse student community, we strive to nurture the leaders of tomorrow. Our curriculum blends rigorous academics with hands-on learning, ensuring students gain the skills and knowledge needed to excel in their respective fields. We emphasize research, creativity, and real-world problem-solving, empowering our students to make a meaningful impact on society. 
               Join us in shaping the future and unlocking limitless opportunities for growth and success</p>
        </div>
    </div>
  )
}

export default About