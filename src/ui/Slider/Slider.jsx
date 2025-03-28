import { useState } from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import SlideItem from "../SlideItem/SlideItem";
import styles from "./slider.module.scss";
import data from "../../myProjects.json";

export default function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
	};
	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? data.length - 1 : prevIndex - 1,
		);
	};
	console.log(data[currentIndex].github_url);

	return (
		<>
			<div className={styles["slider-container"]}>
				<SlideItem
					title={data[currentIndex].title}
					image={data[currentIndex].image}
					description={data[currentIndex].description}
					githubUrl={data[currentIndex].github_url}
					appUrl={data[currentIndex].app_url}
					index={currentIndex}
				/>
				{currentIndex !== 0 && (
					<ArrowButton direction="left" onClick={prevSlide} />
				)}
				{currentIndex + 1 !== data.length && (
					<ArrowButton direction="right" onClick={nextSlide} />
				)}
			</div>
		</>
	);
}
