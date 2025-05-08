import styles from "./biographyBloc.module.scss";

export default function BiographyBloc() {
	return (
		<div className={styles["main-container"]}>
			{" "}
			<div>
				<h2 className={styles.title}>QUI SUIS-JE ?</h2>
			</div>
			<div className={styles.content}>
				<div className={styles["pic-container"]}>
					<img className={styles.matt} src="/M4.png" alt="" />
				</div>
				<div className={styles["bio-container"]}>
					<p className={styles.bio}>
						Après des années d'une vie riche en expériences professionnelles
						(boulanger, bibliothécaire, gardien de parking, acteur, poète,
						vendeur de chaussures) aux quatre coins de la France (Nice, Le
						Havre, Metz, Fougères, Marseille), j'ai décidé d'embrasser le métier
						de développeur web à l'automne 2023. Mon objectif est de me
						spécialiser dans le développement front-end mais j'aime aussi le
						back-end, surtout depuis que je manipule les API d'IA génératives
						dans le cadre de mon stage chez Mindoza, où je travaille
						actuellement. <br />
						<br />
						Je suis à la recherche d'un poste (CDD ou CDI) à partir du 16 juin
						2025.
					</p>
				</div>
			</div>
		</div>
	);
}
