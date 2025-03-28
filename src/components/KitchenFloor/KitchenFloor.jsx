import { useState, useEffect } from "react";
import styles from "./kitchenFloor.module.scss";

export default function KitchenFloor() {
	const [cellCount, setCellCount] = useState(16);

	useEffect(() => {
		const handleResize = () => {
			setCellCount(window.innerWidth >= 768 ? 32 : 16);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className={styles["kitchen-floor"]}>
			{Array.from({ length: cellCount }, (_, index) => (
				<div key={index} className={`${styles.cell}`} />
			))}
		</div>
	);
}
