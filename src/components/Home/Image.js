/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { EffectFade } from 'swiper';
import Image_1 from './image/1.jpg';
import Image_2 from './image/2.jpg';
import Image_3 from './image/3.jpg';
import Image_4 from './image/4.jpg';
import Image_6 from './image/6.jpg';
import Image_7 from './image/7.jpg';
import Image_9 from './image/9.jpg';

function Image() {
    return (
        <article>
            <div className='image'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y , EffectFade]}
                    effect="Fade"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, }}style={{color:"gold"}}
                >
                    <SwiperSlide className="swiper"><img className='Image' src={Image_1} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                    <SwiperSlide className="swiper"><img className='Image' src={Image_2} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                    <SwiperSlide className="swiper"><img className='Image' src={Image_3} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                    <SwiperSlide className="swiper"><img className='Image' src={Image_4} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                    <SwiperSlide className="swiper"><img className='Image' src={Image_6} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                    <SwiperSlide className="swiper"><img className='Image' src={Image_7} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                    <SwiperSlide className="swiper"><img className='Image' src={Image_9} alt="Photo" style={{width:"400px" , height:"250px"}}/></SwiperSlide>
                </Swiper>
                </div>
        </article>
    )
}

export default Image