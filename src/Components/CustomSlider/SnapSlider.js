import React from "react";
import BtnSlider from "./SliderButton";
import { useState, useEffect } from "react";
import "./SnapSlider.scss";
function SnapSlider() {
	const dataSlider = [
		{
			id: 1,
			title: "Lorem ipsum 1",
			subTitle: "Lorem",
		},
		{
			id: 2,
			title: "Lorem ipsum 2",
			subTitle: "Lorem",
		},
		{
			id: 3,
			title: "Lorem ipsum 3",
			subTitle: "Lorem",
		},
		{
			id: 4,
			title: "Lorem ipsum 4",
			subTitle: "Lorem",
		},
		{
			id: 5,
			title: "Lorem ipsum 5",
			subTitle: "Lorem",
		},
	];
	const [slideIndex, setSlideIndex] = useState(0);
	const [animationClass, setAnimationClass] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setAnimationClass(false);
		}, 400);
	}, [animationClass]);

	const nextSlide = () => {
		if (slideIndex >= dataSlider.length - 1) {
			setSlideIndex(0);
		} else {
			setSlideIndex(slideIndex + 1);
		}
		setAnimationClass(true);
	};

	const prevSlide = () => {
		if (slideIndex <= 0) {
			setSlideIndex(dataSlider.length - 1);
		} else {
			setSlideIndex(slideIndex - 1);
		}
		setAnimationClass(true);
	};

	return (
		<>
			<div className='customCrouselCont'>
				<div className='crouselcont'>
					<div
						className={
							animationClass
								? "slide active-anim side slideoutAnimationsec"
								: "slide active-anim side"
						}>
						<h1>
							{
								dataSlider[
									slideIndex - 1 < 0 ? dataSlider.length - 1 : slideIndex - 1
								].title
							}
						</h1>
						<p>
							{
								dataSlider[
									slideIndex - 1 < 0 ? dataSlider.length - 1 : slideIndex - 1
								].subTitle
							}
						</p>
					</div>

					<div
						className={
							animationClass
								? "slide active-anim side slideoutAnimation"
								: "slide active-anim side"
						}>
						<h1>
							{
								dataSlider[
									slideIndex + 1 >= dataSlider.length ? 0 : slideIndex + 1
								].title
							}
						</h1>
						<p>
							{
								dataSlider[
									slideIndex + 1 >= dataSlider.length ? 0 : slideIndex + 1
								].subTitle
							}
						</p>
					</div>
					<div className='focuseddiv'>
						<div
							className={
								animationClass
									? "slide active-anim focus slideInAnimation"
									: "slide active-anim focus"
							}>
							<h1>{dataSlider[slideIndex].title}</h1>
							<p>{dataSlider[slideIndex].subTitle}</p>
						</div>
					</div>
				</div>
				<BtnSlider moveSlide={nextSlide} direction={"next"} />
				<BtnSlider moveSlide={prevSlide} direction={"prev"} />
			</div>
		</>
	);
}

export default SnapSlider;
