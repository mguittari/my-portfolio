import Title from "../../ui/Container/ContainerTitle";
import CurriculumComponent from "../CurriculumComponent/CurriculumComponent";
import LinksComponent from "../LinksComponent/LinksComponent";

export default function SocialMediaComponent() {
	return (
		<div>
			<Title
				containerId="container-social-media"
				titleId="title-social-media"
				title="RÉSEAUX SOCIAUX ET CV"
			/>
			<LinksComponent />
			<CurriculumComponent />
		</div>
	);
}
