// import React from 'react';
// import './Contact.css'
// import msg_icon from '../../assets/msg-icon.png';
// import mail_icon from '../../assets/mail-icon.png';
// import location_icon from '../../assets/location-icon.png';
// import phone_icon from '../../assets/phone-icon.png';
// import white_arrow from '../../assets/white-arrow.png';


// const Contact = () => {  
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "aaaa451f-dd8c-4e78-92af-1bda043fd6bb");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);

//     }
//   };

//   return (
//     <div className="contact">
//       <div className="contact-col">
//         <h3> Send us a message <img src={msg_icon} alt="message icon"/></h3> {/* Corrected img tag */}
//         <p>Have questions or need assistance? Our team is ready to help! Reach out to us via email, phone, or the contact form below. 
//           We strive to provide prompt responses and excellent customer service. Your inquiries are important to us, and we will do our best to assist you as soon as possible.</p>
//       </div>
//       <br></br>
//       <br/>
//       <br/>
//       <ul>
//         <li><img src={mail_icon} alt="mail icon"/>contact@GreatStack.dev </li> {/* Added "icon" to alt text */}
//         <li><img src={phone_icon} alt="phone icon"/>+2 356-776-990 </li> {/* Added "icon" to alt text */}
//         <li><img src={location_icon} alt="location icon"/>77 Maschuttas Ave, Cambridge, 0067, United States </li> {/* Added "icon" to alt text and fixed spacing */}
//       </ul>
//       <div className='contact-col'>
//         <form onSubmit={onSubmit}>
//           <label>Your Name</label>
//             <input type="text" name="name" placeholder="Enter your name" required/><br/>
//             <label>Your Email</label>
//             <input type="email" name="email" placeholder="Enter your email" required/><br/>
//             <label>Phone-Number</label>
//             <input type="number" name="phone" placeholder="Enter your phone number" required/><br/>
//             <label>Write your Message here!</label>
//             <textarea name="message" rows="6" placeholder="Enter your message" required></textarea><br/>
//             <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="submit arrow"/></button>

//         </form>
//         <span>{result}</span>
//       </div>
//     </div>
//   )
// }

// export default Contact;


import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3290335a-ecf9-4e04-92bb-83d21b512b82");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find out our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional services to our university community</p>
            </div>
            
            <br/>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/>MA 02139, United States</li>
            </ul>
        
        <div className="contact-col">
            <form onSubmit={onSubmit}> 
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile-number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact