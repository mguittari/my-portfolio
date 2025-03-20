import styles from "./block.module.scss";

export default function Block({ mainContainerId, subContainerId, title }) {
	return (
		<div id={styles[mainContainerId]} className={styles["main-container"]}>
			<h2 className={styles[title.toLowerCase()]}>{title}</h2>
			<div id={styles[subContainerId]} className={styles["sub-container"]}>
				<div className={styles.content}>
					{" "}
					<ul className={styles.list}>
						<li>
							<p>Élément 1 Wild Code School 2025</p>
						</li>
						<li>
							<p>Élément 2 Wild Code School 2024</p>
						</li>
						<li>
							<p>Master Création Littéraire Le Havre</p>
						</li>
						<li>
							<p>Élément 4</p>
						</li>
						<li>
							<p>Élément 5</p>
						</li>
						<li>
							<p>Élément 6</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
