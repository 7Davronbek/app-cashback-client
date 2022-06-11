import React from 'react'
import { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";
    


const ScreenArea = () => {
    return (
        <div className='ScreenArea'>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-10 titles text-center">
                    <h2 className="section-title">Our App ScreenShots</h2>
                    <p>Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate nibh, sit amet blandit erat magna.</p>
                </div>
            </div>
            <div className="container">
                <div className="screen-slider">
                    <Swiper
                        // effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"7"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../img/screen-img01.png" />
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
        </div >
    )
}

export default ScreenArea