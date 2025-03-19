import styles from "./titleBlock.module.scss";

export default function TitleBlock() {
	return (
		<div className={styles["slider-container"]}>
			<div className={styles["name-container"]}>
				<h1 className={styles["my-name"]}>MATTIAS GUITTARI</h1>
			</div>
			<div className={styles["job-container"]}>
				<h1 className={styles["my-job"]}>DÉVELOPPEUR FRONT-END</h1>
			</div>
		</div>
	);
}
