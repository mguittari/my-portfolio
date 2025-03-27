import Title from "../../ui/Container/ContainerTitle";
import Slider from "../../ui/Slider/Slider";

export default function ProjectsComponent() {
	return (
		<div>
			<Title
				containerId="container-projects"
				titleId="title-projects"
				title="RÉALISATIONS"
			/>
			<Slider />
		</div>
	);
}
