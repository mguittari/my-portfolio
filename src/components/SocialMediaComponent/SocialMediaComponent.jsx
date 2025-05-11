import { useContext } from "react";
import Title from "../../ui/Container/ContainerTitle";
import CurriculumComponent from "../CurriculumComponent/CurriculumComponent";
import LinksComponent from "../LinksComponent/LinksComponent";
import ContrastContext from "../../context/ContrastContext/ContrastContext";

export default function SocialMediaComponent() {
	const { contrast } = useContext(ContrastContext);
	return (
		<div>
			<Title
				containerClassName="container-social-media"
				containerId={contrast ? "contrasted" : ""}
				titleId="title-social-media"
				title="RÉSEAUX SOCIAUX ET CV"
			/>
			<LinksComponent />
			<CurriculumComponent />
		</div>
	);
}
