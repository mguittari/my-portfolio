import ButtonCV from "../../ui/ButtonCV/ButtonCV";
import styles from "./curriculumComponent.module.scss";

export default function CurriculumComponent() {
	return (
		<div className={styles["CV-container"]}>
			<ButtonCV text="CV Couleur" fileName="CV_COULEUR_GUITTARI.pdf" />
			<ButtonCV text="CV Noir et blanc" fileName="CV_NB_GUITTARI.pdf" />
		</div>
	);
}
