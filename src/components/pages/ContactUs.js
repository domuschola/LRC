import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import '../../style/ContactUs.scss';

export class ContactUs extends Component {
    render() {
        return (
            // <div className="contact_us my-5">     
            <MDBContainer className="contact_us">
                <div className="contact_us_header my-5 roboto" data-aos="zoom-in">
                    <h1 className="h1-responsive">CONTACT</h1>
                    <h6>DETAILS</h6>
                </div>
                <MDBRow data-aos="zoom-in">
                    <MDBCol lg="7" md="7" sm="5">
                        <MDBCard>
                            <MDBCardBody>
                                <iframe className="contact_us_form_iframe"
                                    title="contact_us_form_iframe"
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSeYSUT-drC5BGT4BOZmixySOtssKA7tDwL3uFfjm0f7-h68CA/viewform?embedded=true" 
                                    width="100%" 
                                    frameborder="0">
                                        Loading…
                                </iframe>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="5" md="5" sm="8">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                className="contact_us_map_iframe"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15445.320034049793!2d121.078697!3d14.580262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x427c1be8628a2acd!2sDomuschola%20International%20School!5e0!3m2!1sen!2sph!4v1600648844775!5m2!1sen!2sph" 
                                title="Domuschola Location"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                            />
                        </div>
                        <br />
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn className="round-button" tag="a" floating color="orange accent-4">
                                    <MDBIcon icon="map-marker-alt" />
                                </MDBBtn>
                                <p>13 Jose C.Cruz, Pasig</p>
                                <p className="mb-md-0">Metro Manila</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn className="round-button" tag="a" floating color="orange accent-4">
                                    <MDBIcon icon="phone" />
                                </MDBBtn>
                                <p>(632) 8635 2002</p>
                                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn className="round-button" tag="a" floating color="orange accent-4">
                                    <MDBIcon icon="envelope" />
                                </MDBBtn>
                                <p>info@gmail.com</p>
                                <p className="mb-md-0">sale@gmail.com</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            // </div>
        )
    }
}

export default ContactUs
