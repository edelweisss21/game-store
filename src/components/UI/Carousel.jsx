import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Modal from './Modal';
import { CartContext } from '../../services/CartContext';

const Carousel = ({ game }) => {
	const [selectedPic, setSelectedPic] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
					variableWidth: true,
				},
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					variableWidth: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const openModal = pic => {
		setIsOpen(true);
		setSelectedPic(pic);
	};

	return (
		<>
			<div className='carousel'>
				<Slider {...settings}>
					{game &&
						game.short_screenshots.slice(1).map(pic => (
							<div key={pic.id} onClick={() => openModal(pic)}>
								<img className='carouselImg' src={pic.image} alt={game.name} />
							</div>
						))}
				</Slider>
			</div>
			{isOpen && (
				<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
					<img className='modalImg' src={selectedPic.image} alt={game.name} />
				</Modal>
			)}
		</>
	);
};

export default Carousel;
