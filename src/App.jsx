import "./app.scss";
import TopLightPinkBlock from "./components/TopLightPinkBlock/TopLightPinkBlock";
import TitleBlock from "./components/TitleBloc/TitleBlock";
import SkillsAndStudiesBlocks from "./components/SkillsAndStudiesBlocks/SkillsAndStudiesBlocks";
import Checkerboard from "./components/Checkerboard/Checkerboard";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import KitchenFloor from "./components/KitchenFloor/KitchenFloor";

function App() {
	return (
		<main>
			<TopLightPinkBlock />
			<TitleBlock />
			<SkillsAndStudiesBlocks />
			<Checkerboard />
			<ProjectsComponent />
			<KitchenFloor />
		</main>
	);
}

export default App;
