import styles from "./slideItem.module.scss";

export default function SlideItem({ title, image, index }) {
	return (
		<div
			className={`${styles["slide-item-container"]} ${index % 2 === 0 ? styles.even : styles.odd}`}
		>
			<h3 className={styles.title}>{title}</h3>
			<div
				className={`${styles["item-sub-container"]}  ${index % 2 === 1 ? styles.even : styles.odd}`}
			>
				<div className={styles.content}>{image}</div>
			</div>
		</div>
	);
}
