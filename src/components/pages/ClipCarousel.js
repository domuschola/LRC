import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel, { consts } from 'react-elastic-carousel';
// import Library1 from '../../images/Library1.jpg';
import LRC1 from '../../images/lrc1.3.jpg';
import LRC2 from '../../images/lrc2.1.jpg';
import LRC3 from '../../images/lrc3.1.jpg';
import LRC4 from '../../images/lrc4.1.jpg';
import LRC5 from '../../images/lrc5.1.jpg';
import LRC6 from '../../images/lrc6.jpg';
import LRC7 from '../../images/lrc7.jpg';
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
                            {/* <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4.22183 19.7782C-0.0739419 15.4824 -0.0739419 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782ZM5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z"
                                fill="currentColor"
                            /> */}
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
                            {/* <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                                fill="currentColor"
                            /> */}
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
                        <img
                            className="lrc_img"
                            src={LRC7}
                            alt="LRC7"
                        />
                        <img
                            className="lrc_img"
                            src={LRC1}
                            alt="LRC1"
                            
                        />
                        <img
                            className="lrc_img"
                            src={LRC2}
                            alt="LRC2"
                        />
                        <img
                            className="lrc_img"
                            src={LRC3}
                            alt="LRC3"
                        />
                        <img
                            className="lrc_img"
                            src={LRC4}
                            alt="LRC4"
                        />
                        <img
                            className="lrc_img"
                            src={LRC5}
                            alt="LRC5"
                        />
                        <img
                            className="lrc_img"
                            src={LRC6}
                            alt="LRC6"
                        />
                    </Carousel>
                    
                </div>
            </div>
        )
    }
}

export default ClipCarousel
