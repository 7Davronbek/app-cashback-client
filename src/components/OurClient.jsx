import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from 'swiper';


const OurClient = () => {
    return (
        <div className='OurClient'>
            <div className="for4"></div>
            <div className="for1"></div>
            <div className="for2"></div>
            <div className="for3"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10 text-center mb-5">
                        <div className="titles">
                            <h2>What Our Clients Say’s</h2>
                            <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>

                        </div>
                    </div>
                    <div className="client-slider">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Navigation]}

                        // {breakpoints: {{
                        //     1200: {
                        //         slidesPerView: 4,
                        //         loopedSlides: 4,
                        //         spaceBetween: 10
                        //     },
                        //     1024: {
                        //         slidesPerView: 3,
                        //         loopedSlides: 3,
                        //         spaceBetween: 10
                        //     },
                        //     768: {
                        //         slidesPerView: 2,
                        //         loopedSlides: 2,
                        //         spaceBetween: 10
                        //     },
                        //     0: {
                        //         slidesPerView: 1,
                        //         loopedSlides: 1,
                        //         spaceBetween: 20
                        //     }
                        // }}}
                        //   });

                            className="mySwiper"
                        >

                            <div className="container">
                                <SwiperSlide>
                                    <div className="slick-slide slick-current slick-active">
                                        <div className="single-testimonial">
                                            <div className="testi-author text-left">
                                                <img src="../img/testi_avatar.png" alt="" />
                                                <div className="ta-info">
                                                    <h6>Mr Jone Dose</h6>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="qutation"><img src="../img/qutation.png" alt="" /></div>
                                            <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slick-slide slick-current slick-active">
                                        <div className="single-testimonial">
                                            <div className="testi-author text-left">
                                                <img src="../img/testi_avatar.png" alt="" />
                                                <div className="ta-info">
                                                    <h6>Mr Jone Dose</h6>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="qutation"><img src="../img/qutation.png" alt="" /></div>
                                            <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slick-slide slick-current slick-active">
                                        <div className="single-testimonial">
                                            <div className="testi-author text-left">
                                                <img src="../img/testi_avatar.png" alt="" />
                                                <div className="ta-info">
                                                    <h6>Mr Jone Dose</h6>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="qutation"><img src="../img/qutation.png" alt="" /></div>
                                            <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slick-slide slick-current slick-active">
                                        <div className="single-testimonial">
                                            <div className="testi-author text-left">
                                                <img src="../img/testi_avatar.png" alt="" />
                                                <div className="ta-info">
                                                    <h6>Mr Jone Dose</h6>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="qutation"><img src="../img/qutation.png" alt="" /></div>
                                            <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slick-slide slick-current slick-active">
                                        <div className="single-testimonial">
                                            <div className="testi-author text-left">
                                                <img src="../img/testi_avatar.png" alt="" />
                                                <div className="ta-info">
                                                    <h6>Mr Jone Dose</h6>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="qutation"><img src="../img/qutation.png" alt="" /></div>
                                            <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slick-slide slick-current slick-active">
                                        <div className="single-testimonial">
                                            <div className="testi-author text-left">
                                                <img src="../img/testi_avatar.png" alt="" />
                                                <div className="ta-info">
                                                    <h6>Mr Jone Dose</h6>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <div className="qutation"><img src="../img/qutation.png" alt="" /></div>
                                            <p>Praesent fermentum nisl at ipsum fcilisis viverra elementum accumsan finibus. Cras placerat lacinia mitincidunt sit amet venenatis.</p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClient