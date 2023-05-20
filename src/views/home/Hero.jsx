import React from 'react';
import Pic from "../../images/Pink Dainty Minimalist Business Flower Shop Contest Valentine's Day Instagram Story (1).png";
import { PROMO_TEXT } from '../../config/promoText';

const Hero = () => {
	return (
		<React.Fragment>
			<div className="hero_container">
				<img className="pic_hero_container" src={Pic} />
			</div>
			<div className="d-flex flex-wrap justify-content-center">
				{PROMO_TEXT.map((item, index) => {
					return (
						<div key={index} className="hero__card m-1">
							<div className="text-center w-100">
								<h4>{item.promo}</h4>
								<p>{item.subtitle}</p>
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Hero;
