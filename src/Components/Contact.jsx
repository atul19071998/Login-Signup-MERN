import React from 'react'
import '../Compoentcss/Contact.css'
const Contact = () => {
  return (
     <>

     <div className="contact_info">

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* phone no. */}
             <div className="contact_info_item d-flex justify-content-start align-items-center">
               <img src="" alt="phone" />
               <div className="contact_info_content">
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_text">
                   8305729846
                </div>
               </div>
             </div>
             {/* email */}
             <div className="contact_info_item d-flex justify-content-start align-items-center">
               <img src="" alt="email" />
               <div className="contact_info_content">
                <div className="contact_info_title">
                  Email
                </div>
                <div className="contact_info_text">
                   xyz@gmail.com
                </div>
               </div>
             </div>
             {/* //address */}

             <div className="contact_info_item d-flex justify-content-start align-items-center">
               <img src="" alt="address" />
               <div className="contact_info_content">
                <div className="contact_info_title">
                Address 
                </div>
                <div className="contact_info_text">
                  lanka vihar jabalpur m.p.
                </div>
               </div>
             </div>
          </div>
        </div>
      </div>
     </div>
 {/* conatct us form */}
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">

                <div className="contact_form_container py-5">
               <div className="contact_form_title">
                Get in Touch
               </div>
               <form id="contact_form">
                <div className="contact_form_name d-flex justify-content-between align-items-center">
                  <input type="text" id="contact_form_name"  className='contact_form_name input_field'
                  placeholder="Your Name" required="true"/>
                  <input type="email" id="contact_form_email"  className='email_form_email input_field'
                  placeholder="Your Email" required="true"/>
                  <input type="Number" id="contact_form_phone"  className='contact_form_phone  input_field'
                  placeholder="Your Phone No." required="true"/>
                </div>
              
              <div className="contact_form_text mt-5">
                <textarea name="" id="" placeholder="messages" cols="30" rows="10"></textarea>
              </div>
               <div className="contact_form_button">
               <button type="submit" className="button_contact">Send Message</button>
              </div>
               
               </form>
                
                </div>

              </div>
            </div>
          </div>
        </div>

     </>
  )
}

export default Contact
