import { useState, useEffect, useContext } from "react";
import ContrastContext from "../../context/ContrastContext/ContrastContext";
import Block from "../../ui/Block/Block";
import data from "../../myDatas.json";
import styles from "./skillsAndStudiesBlocks.module.scss";

export default function SkillsAndStudiesBlocks() {
	const { contrast } = useContext(ContrastContext);
	const skills = data.skills;
	const studies = data.studies;
	const exp = data.experience;

	return (
		<div className={styles["block-container"]}>
			<Block
				mainContainerId="studies-main-container"
				subContainerId="studies-sub-container"
				className={contrast ? "contrasted" : ""}
				title="FORMATION"
				studiesData={studies}
			/>
			<Block
				mainContainerId="skills-main-container"
				subContainerId="skills-sub-container"
				className={contrast ? "contrasted" : ""}
				title="TECHNOS"
				skillsData={skills}
			/>
			<Block
				mainContainerId="exp-main-container"
				subContainerId="exp-sub-container"
				className={contrast ? "contrasted" : ""}
				title="EXPÉRIENCE"
				expData={exp}
			/>
		</div>
	);
}
