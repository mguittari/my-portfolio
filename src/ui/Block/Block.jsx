import styles from "./block.module.scss";

export default function Block({
	mainContainerId,
	subContainerId,
	title,
	studiesData,
	skillsData,
	expData,
}) {
	let contentToRender;

	if (studiesData) {
		contentToRender = studiesData.map((element) => (
			<li key={element.dates}>
				<p>
					{element.title} <br />
					{element.school} <br />
					{element.dates} <br />
					{element.description}
				</p>
			</li>
		));
	} else if (skillsData) {
		contentToRender = skillsData.map((skill) => (
			<li className={styles.skills} key={skill}>
				<p>{skill}</p>
			</li>
		));
	} else if (expData) {
		contentToRender = expData.map((exp) => (
			<li key={exp.dates}>
				<p>
					{exp.job} <br />
					{exp.company} <br />
					{exp.town} <br />
					{exp.dates} <br />
					{exp.description}
				</p>
			</li>
		));
	}

	return (
		<div id={styles[mainContainerId]} className={styles["main-container"]}>
			<h2 className={styles[title.toLowerCase()]}>{title}</h2>
			<div id={styles[subContainerId]} className={styles["sub-container"]}>
				<div className={styles.content}>
					<ul className={styles.list}>{contentToRender}</ul>
				</div>
			</div>
		</div>
	);
}
