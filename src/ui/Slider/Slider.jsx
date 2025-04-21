import SlideItem from "../SlideItem/SlideItem";
import styles from "./slider.module.scss";
import data from "../../myProjects.json";

export default function Slider() {
	return (
		<div className={styles["slider-container"]}>
			<div className={styles["slider-track"]}>
				{data.map((project, index) => (
					<SlideItem
						key={index}
						title={project.title}
						image={project.image}
						description={project.description}
						githubUrl={project.github_url}
						appUrl={project.app_url}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}
