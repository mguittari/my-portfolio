import "./app.scss";
import TopLightPinkBlock from "./components/TopLightPinkBlock/TopLightPinkBlock";
import TitleBlock from "./components/TitleBloc/TitleBlock";
import SkillsAndStudiesBlocks from "./components/SkillsAndStudiesBlocks/SkillsAndStudiesBlocks";

function App() {
	return (
		<main>
			<TopLightPinkBlock />
			<TitleBlock />
			<SkillsAndStudiesBlocks />
		</main>
	);
}

export default App;
