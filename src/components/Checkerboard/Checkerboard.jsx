import { useState } from "react";
import styles from "./checkerboard.module.scss";
import { useEffect } from "react";

export default function Checkerboard() {
	const [cellCount, setCellCount] = useState(16);

	useEffect(() => {
		const handleResize = () => {
			// window.innerWidth est une propriété JavaScript qui retourne la largeur interne de la fenêtre du navigateur en pixels.
			setCellCount(window.innerWidth >= 768 ? 32 : 16);
		};

		// window.addEventListener("resize", handleResize) → Exécute handleResize à chaque changement de taille.
		window.addEventListener("resize", handleResize);
		handleResize();

		//  Pense à removeEventListener pour éviter les fuites mémoire en React. En React, toujours prévoir un return dans useEffect pour nettoyer.
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const columns = cellCount === 32 ? 8 : 4; // 8 colonnes en grand écran, sinon 4
	return (
		<div className={styles.checkerboard}>
			{Array.from({ length: cellCount }, (_, index) => (
				<div
					key={index}
					className={`${styles.cell} ${index % 2 === (Math.floor(index / columns) % 2 ? 1 : 0) ? styles.blue : styles.purple}`}
				/>
			))}
		</div>
	);
}
