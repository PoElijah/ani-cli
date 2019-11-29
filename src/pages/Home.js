import React, {Component} from 'react';
import Carousel from 'react-spring-3d-carousel';

import img_1 from './../assets/images/705365.png';
import img_2 from './../assets/images/594566.jpg';
import img_3 from './../assets/images/694611.jpg'
import {Link} from "react-router-dom";
import Icon from "../components/Icon";


class Home extends Component{
	state = {
		slide: 0
	};
	changeSlide = (next) => {
		this.setState({slide: next ? this.state.slide + 1 : this.state.slide - 1})
	};
	render() {
		const slides = [
			{key: 'img_1', content: <Link className='sliderBlock__link' to='#'><img className='sliderBlock__img' src={img_1} alt="img_1"/></Link>},
			{key: 'img_2', content: <Link className='sliderBlock__link' to='#'><img className='sliderBlock__img' src={img_2} alt="img_2"/></Link>},
			{key: 'img_3', content: <Link className='sliderBlock__link' to='#'><img className='sliderBlock__img' src={img_3} alt="img_3"/></Link>}
		];
		return (
			<div className='homePage container-fluid px-5'>
				<div className="sliderBlock">
					<span className='sliderBlock__title'>За гранью</span>
					<button className='sliderBlock__btn sliderBlock__btn--prew' onClick={() => this.changeSlide(false)}>
						<Icon name='angle-left'/>
					</button>
					<button className='sliderBlock__btn sliderBlock__btn--next' onClick={() => this.changeSlide(true)}>
						<Icon name='angle-right'/>
					</button>
					<Carousel showNavigation={false} goToSlide={this.state.slide} slides={slides}/>
				</div>
			</div>
		);
	}
}

export default Home;