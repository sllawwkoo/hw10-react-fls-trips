import { useContext } from "react";
import SunIcon from "./components/SunIcon";
import MoonIcon from "./components/MoonIcon";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./ThemeSwitcher.module.scss";

function ThemeSwitcher() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div
			className={styles.wrapper}
			onClick={toggleTheme}
			role="button"
			tabIndex={0}
			aria-label="Перемкнути тему"
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") toggleTheme();
			}}
		>
			<span className={styles.themeToggleSlider}>
				{theme === "light" ? <SunIcon /> : <MoonIcon />}
			</span>
		</div>
	);
}

export default ThemeSwitcher;