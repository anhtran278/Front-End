import { Image } from 'antd';
import React from 'react'
import { WrapperSliderStyle } from './style';

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <WrapperSliderStyle className='slide' {...settings}>
            {arrImages.map((image) => {
                return (
                    <div className='img' key={image}>
                        <Image src={image.src} alt="slider" preview={false} width="100%" height="300px" />
                        <div className="slider-caption">
                            <h2 className='title_slider'>{image.title}</h2>
                            <p className='price_slider'>{image.price}</p>
                        </div>
                    </div>
                );
            })}
        </WrapperSliderStyle>
    );
}


export default SliderComponent