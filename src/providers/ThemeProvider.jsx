import { ThemeContext } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	// збереження теми в localStorage, щоб не збивалась після перезавантаження
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		setTheme(savedTheme);
		document.documentElement.setAttribute("data-theme", savedTheme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
	};

	return (
		<ThemeContext value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext>
	);
}

export default ThemeProvider;
