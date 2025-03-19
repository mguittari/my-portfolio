import "./app.scss";
import TopLightPinkBlock from "./components/TopLightPinkBlock/TopLightPinkBlock";
import TitleBlock from "./components/TitleBloc/TitleBlock";
function App() {
	return (
		<main>
			<TopLightPinkBlock />
			<TitleBlock />
			<div className="education-bloc">
				<h2 className="component-3">Composant 3</h2>
			</div>
		</main>
	);
}

export default App;
