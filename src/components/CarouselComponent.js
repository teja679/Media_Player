import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ data }) => {
	return (
		<div className='carousel-div'>
			<Carousel>
				{data.map(item => (
					<div className='carousel'>
						<img src={item.poster} className='poster' />
						<p className="legend">{item.name}</p>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default CarouselComponent
