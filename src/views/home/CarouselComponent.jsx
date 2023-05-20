import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { CAROUSEL_IMAGES } from '../../config/imageData';

const CarouselComponent = () => {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
			className="mySwiper"
		>
			{CAROUSEL_IMAGES.map((item, index) => {
				return (
					<SwiperSlide
						key={index}
						style={{ height: '300px', marginTop: '5em' }}
					>
						<img
							src={item.image}
							style={{ objectFit: 'cover', height: '300px', width: '100%' }}
						/>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default CarouselComponent;
