import Block from "../../ui/Block/Block";
import data from "../../myDatas.json";
import styles from "./skillsAndStudiesBlocks.module.scss";

export default function SkillsAndStudiesBlocks() {
	const skills = data.skills;
	const studies = data.studies;
	const exp = data.experience;

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
			<Block
				mainContainerId="exp-main-container"
				subContainerId="exp-sub-container"
				title="EXPÉRIENCE"
				expData={exp}
			/>
		</div>
	);
}
