import "./app.scss";
import TopLightPinkBlock from "./components/TopLightPinkBlock/TopLightPinkBlock";
import TitleBlock from "./components/TitleBloc/TitleBlock";
import SkillsAndStudiesBlocks from "./components/SkillsAndStudiesBlocks/SkillsAndStudiesBlocks";
import Checkerboard from "./components/Checkerboard/Checkerboard";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import KitchenFloor from "./components/KitchenFloor/KitchenFloor";
import SocialMediaComponent from "./components/SocialMediaComponent/SocialMediaComponent";
import StaircasePattern from "./components/StaircasePattern/StaircasePattern";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<main>
			<TopLightPinkBlock />
			<TitleBlock />
			<SkillsAndStudiesBlocks />
			<Checkerboard />
			<ProjectsComponent />
			<KitchenFloor />
			<SocialMediaComponent />
			<StaircasePattern />
			<Footer />
		</main>
	);
}

export default App;
