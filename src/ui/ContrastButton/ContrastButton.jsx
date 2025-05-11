import styles from "./contrastButton.module.scss";
import { useContext } from "react";
import ContrastContext from "../../context/ContrastContext/ContrastContext";

export default function ContrastButton() {
	const { contrast, toggleContrast } = useContext(ContrastContext);
	return (
		<div
			title={!contrast ? "Augmenter les contrastes" : "Réduire les contrastes"}
			className={styles["container-button"]}
		>
			<label className={styles.switch}>
				<input type="checkbox" checked={contrast} onChange={toggleContrast} />

				<span className={styles.slider} />
			</label>
		</div>
	);
}
