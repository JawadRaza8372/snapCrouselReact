import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForward";
export default function SliderButton({ direction, moveSlide }) {
	return (
		<button
			onClick={moveSlide}
			className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
			{direction === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
		</button>
	);
}
