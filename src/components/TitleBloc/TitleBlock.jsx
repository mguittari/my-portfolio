import { useContext } from "react";
import ContainerTitle from "../../ui/Container/ContainerTitle";
import styles from "./titleBlock.module.scss";
import ContrastContext from "../../context/ContrastContext/ContrastContext";

export default function TitleBlock() {
	const { contrast } = useContext(ContrastContext);
	return (
		<div className={styles["slider-container"]}>
			<ContainerTitle
				containerClassName="name-container"
				containerId={contrast ? "title-color-contrast" : ""}
				titleId="my-name"
				title="MATTIAS GUITTARI"
			/>
			<ContainerTitle
				containerId="job-container"
				titleId="my-job"
				title="DÉVELOPPEUR WEB FULL-STACK"
			/>
		</div>
	);
}
