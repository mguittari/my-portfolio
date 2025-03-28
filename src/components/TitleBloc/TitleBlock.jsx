import ContainerTitle from "../../ui/Container/ContainerTitle";
import styles from "./titleBlock.module.scss";

export default function TitleBlock() {
	return (
		<div className={styles["slider-container"]}>
			<ContainerTitle
				containerId="name-container"
				titleId="my-name"
				title="MATTIAS GUITTARI"
			/>
			<ContainerTitle
				containerId="job-container"
				titleId="my-job"
				title="DÉVELOPPEUR FRONT-END"
			/>
		</div>
	);
}
