import styles from "./block.module.scss";

export default function Block({
	mainContainerId,
	subContainerId,
	title,
	studiesData,
	skillsData,
	expData,
}) {
	const renderStudies = () =>
		studiesData.map(({ dates, title, school, description }) => (
			<li className={styles.studies} key={dates}>
				<p>
					<strong>{title}</strong>
				</p>
				<p>►{school}</p>
				<p>►{dates}</p>
				<p>►{description}</p>
			</li>
		));

	const renderSkills = () =>
		skillsData.map((skill) => (
			<li className={styles.skills} key={skill}>
				<p>{skill}</p>
			</li>
		));

	const renderExperience = () =>
		expData.map(({ dates, job, company, town, description }) => (
			<li className={styles.exp} key={dates}>
				<p className={styles.job}>
					<strong>{job}</strong>
				</p>
				<p className={styles.company}>►{company}</p>
				<p className={styles.town}>►{town}</p>
				<p className={styles.dates}>►{dates}</p>
				<p className={styles.desc}>►{description}</p>
			</li>
		));

	const contentToRender = (() => {
		if (studiesData) return renderStudies();
		if (skillsData) return renderSkills();
		if (expData) return renderExperience();
		return null;
	})();

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
