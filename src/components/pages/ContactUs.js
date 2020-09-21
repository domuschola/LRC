import React, { Component } from 'react';
import '../../style/ContactUs.scss';

export class ContactUs extends Component {
    render() {
        return (
            <div className="contact_us_grid">
                <div className="contact_us_header">
                    <h1>CONTACT</h1>
                    <h6>DETAILS</h6>
                </div>
                
                <div className="contact_us_form_iframe">
                    <iframe title="contact_us_form_iframe"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeYSUT-drC5BGT4BOZmixySOtssKA7tDwL3uFfjm0f7-h68CA/viewform?embedded=true" 
                        width="640" 
                        height="700" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0">
                            Loading…
                    </iframe>
                </div>

                <div className="contact_details">
                    <iframe className="contact_us_map_iframe" 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15445.320034049793!2d121.078697!3d14.580262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x427c1be8628a2acd!2sDomuschola%20International%20School!5e0!3m2!1sen!2sph!4v1600648844775!5m2!1sen!2sph" 
                        width="600" 
                        height="450" 
                        frameborder="0" 
                        allowfullscreen="" 
                        aria-hidden="false" 
                        tabindex="0">
                    </iframe>

                    <div className="contact_address">
                        <p><h6>Address:</h6> 13 Jose C.Cruz, Pasig, 1604 Metro Manila</p>
                        <p><h6>Telephone:</h6> (632) 8635 2002</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs
