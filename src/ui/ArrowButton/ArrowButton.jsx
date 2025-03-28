import styles from "./arrowButton.module.scss";
import rightArrow from "../../assets/Arrow-Right.svg";
import leftArrow from "../../assets/Arrow-Left.svg";

export default function ArrowButton({ direction, onClick }) {
	return (
		<>
			<button
				type="button"
				onClick={onClick}
				className={`${styles.arrows} ${styles[`arrow-${direction}`]}`}
			>
				<img
					src={direction === "left" ? leftArrow : rightArrow}
					alt={`${direction} arrow`}
					className={styles.icon}
				/>
			</button>
		</>
	);
}
