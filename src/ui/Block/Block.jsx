import styles from "./block.module.scss";

export default function Block({
	mainContainerId,
	subContainerId,
	title,
	studiesData,
	skillsData,
}) {
	return (
		<div id={styles[mainContainerId]} className={styles["main-container"]}>
			<h2 className={styles[title.toLowerCase()]}>{title}</h2>
			<div id={styles[subContainerId]} className={styles["sub-container"]}>
				<div className={styles.content}>
					{" "}
					<ul className={styles.list}>
						{studiesData
							? studiesData.map((element) => {
									return (
										<li key={element.dates}>
											<p>
												{element.title} <br /> {element.school} <br />{" "}
												{element.dates} <br /> {element.description}
											</p>
										</li>
									);
								})
							: skillsData.map((skill) => {
									return (
										<li key={skill}>
											<p>{skill}</p>
										</li>
									);
								})}
					</ul>
				</div>
			</div>
		</div>
	);
}
