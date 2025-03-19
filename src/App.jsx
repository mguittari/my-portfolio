import "./app.scss";
import TopLightPinkBloc from "./components/TopLightPinkBlock/TopLightPinkBlock";

function App() {
	return (
		<>
			<main>
				<TopLightPinkBloc />
				<div className="header-bloc">
					<h1 className="component-2">COMPOSANT 2</h1>
				</div>
				<div className="education-bloc">
					<h2 className="component-3">Composant 3</h2>
				</div>
			</main>
		</>
	);
}

export default App;
