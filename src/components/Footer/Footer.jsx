import styles from "./footer.module.scss";
import upArrow from "../../assets/Arrow-Up.svg";

export default function Footer() {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={styles.footer}>
			<h3 className={styles.title}>
				Site développé avec React, Vite, SCSS <br /> à partir d’une maquette
				réalisée sur Figma
			</h3>
			<div className={styles.subtitle}>
				<p className={styles.p}>Copyright Mattias Guittari</p>
				<p className={styles.p}>Avril 2025</p>
			</div>
			<div className={styles.arrow}>
				{" "}
				<img
					onClick={handleClick}
					onKeyUp={handleClick}
					className={styles.icon}
					src={upArrow}
					alt="Up"
				/>
			</div>
		</div>
	);
}
