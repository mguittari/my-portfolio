import { useState, useEffect } from "react";
import styles from "./staircasePattern.module.scss";

export default function StaircasePattern() {
	const [cellCount, setCellCount] = useState(8);

	useEffect(() => {
		const handleResize = () => {
			setCellCount(window.innerWidth >= 550 ? 16 : 8);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const row = Array.from({ length: cellCount });

	return (
		<>
			<div className={styles.row}>
				{row.map((_, index) => (
					<div
						key={index}
						className={`${styles.cell} ${index % 2 === 0 ? styles.green : styles.purple}`}
					/>
				))}
			</div>
			<div className={styles.row2}>
				{row.map((_, index) => (
					<div
						key={index}
						className={`${styles.cell} ${index % 2 === 0 ? styles.green : styles.purple}`}
					/>
				))}
			</div>
			<div className={styles.row3}>
				{row.map((_, index) => (
					<div
						key={index}
						className={`${styles.cell} ${index % 2 === 0 ? styles.green : styles.purple}`}
					/>
				))}
			</div>
			<div className={styles.row4}>
				{row.map((_, index) => (
					<div
						key={index}
						className={`${styles.cell} ${index % 2 === 0 ? styles.green : styles.purple}`}
					/>
				))}
			</div>
		</>
	);
}
