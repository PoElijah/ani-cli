import React from 'react';
import {Carousel} from '3d-react-carousal';

import img_1 from './../assets/images/705365.png';
import img_2 from './../assets/images/594566.jpg';
import img_3 from './../assets/images/694611.jpg'
import {Link} from "react-router-dom";


function Home(props) {
	const slides = [
		<Link to='#'><img className='sliderBlock__img' src={img_1} alt="img_1"/></Link>,
		<Link to='#'><img className='sliderBlock__img' src={img_2} alt="img_2"/></Link>,
		<Link to='#'><img className='sliderBlock__img' src={img_3} alt="img_3"/></Link>
	];
	return (
		<div className='homePage container-fluid px-5'>
			<div className="sliderBlock">
				<span className='sliderBlock__title'>За гранью</span>
				<Carousel slides={slides}/>
			</div>
		</div>
	);
}

export default Home;