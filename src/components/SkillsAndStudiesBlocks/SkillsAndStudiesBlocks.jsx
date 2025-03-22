import Block from "../../ui/Block/Block";
import data from "../../data.json";
import styles from "./skillsAndStudiesBlocks.module.scss";

export default function SkillsAndStudiesBlocks() {
	const skills = data.skills;
	console.log(skills);
	const studies = data.studies;
	console.log(studies);

	return (
		<div className={styles["block-container"]}>
			<Block
				mainContainerId="studies-main-container"
				subContainerId="studies-sub-container"
				title="FORMATION"
				studiesData={studies}
			/>
			<Block
				mainContainerId="skills-main-container"
				subContainerId="skills-sub-container"
				title="TECHNOS"
				skillsData={skills}
			/>
		</div>
	);
}
