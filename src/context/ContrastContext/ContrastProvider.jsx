import { useState } from "react";
import ContrastContext from "./ContrastContext.jsx";

export default function ThemeProvider({ children }) {
	const [contrast, setContrast] = useState(false);

	const toggleContrast = () => {
		setContrast(!contrast);
	};

	return (
		<ContrastContext.Provider value={{ contrast, toggleContrast }}>
			{children}
		</ContrastContext.Provider>
	);
}
