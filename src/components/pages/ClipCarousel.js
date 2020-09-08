import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Library1 from '../../images/Library1.jpg';
import LRC1 from '../../images/lrc1.3.jpg';
import LRC2 from '../../images/lrc2.jpg';
import LRC3 from '../../images/lrc3.1.jpg';
import LRC4 from '../../images/lrc4.1.jpg';
import LRC5 from '../../images/lrc5.jpg';
import LRC6 from '../../images/lrc6.jpg';
import LRC7 from '../../images/lrc7.jpg';
import '../../style/Carousel.scss';

export class ClipCarousel extends Component {
    render() {
        return (
            <div className="carousel">
                <div className="carousel_images">
                    {/* <img src={Library1} width="1900px" alt="Library1" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80" alt="none" /> */}
                    
                    <Carousel>
                        {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=841&q=80"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                alt="Third slide"
                            />
                        </Carousel.Item> */}
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC1}
                                alt="LRC1"
                                
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC2}
                                alt="LRC2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC3}
                                alt="LRC3"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC4}
                                alt="LRC4"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC5}
                                alt="LRC5"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC6}
                                alt="LRC6"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={LRC7}
                                alt="LRC7"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>    
            </div>
        )
    }
}

export default ClipCarousel
