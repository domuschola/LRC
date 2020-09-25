import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel, { consts } from 'react-elastic-carousel';
// import Library1 from '../../images/Library1.jpg';
import { photos } from '../Photos.js';
import '../../style/Carousel.scss';

export class ClipCarousel extends Component {
    render() {
        return (
            <div className="carousel">
                <div className="carousel_btn">
                    <div className="prev_btn" onClick={() => this.carousel.slidePrev()}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="prev_arrow_btn"
                                d="M11.9481 14.8285L10.5339 16.2427L6.29122 12L10.5339 7.7574L11.9481 9.17161L10.1196 11H17.6568V13H10.1196L11.9481 14.8285Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="next_btn" onClick={() => this.carousel.slideNext()}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="next_arrow_btn"
                                d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
                <div className="carousel_slide">
                    <Carousel 
                        itemsToShow={1} 
                        autoPlaySpeed={5000} 
                        itemPosition={consts.END} 
                        pagination={false}
                        showArrows={false}
                        focusOnSelect={true}
                        enableAutoPlay={true}
                        ref={ref => (this.carousel = ref)}
                        infinite={true}
                    >
                        {photos.map((photo) => (
                            <img
                                className="lrc_img"
                                src={photo.src}
                                alt={photo.alt}
                            />
                        ))}
                    </Carousel>
                    
                </div>
            </div>
        )
    }
}

export default ClipCarousel
