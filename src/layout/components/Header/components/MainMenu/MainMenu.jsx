import styles from "./MainMenu.module.scss";
import { routes } from "@/router/router";
import { NavLink } from "react-router";

function MainMenu({ isOpen, onToggleMenu, isMobile }) {
	return (
		<nav className={`${styles.menu} ${isOpen ? styles.open_menu : ""}`}>
			<ul className={styles.menu__list}>
				{routes[0].children.map(
					(route, index) =>
						route.handler && (
							<li
								key={index}
								className={styles.menu__item}
							>
								<NavLink
									to={route.path}
									className={({ isActive }) =>
										`${styles.menu__link} ${isActive ? styles.active : ""}`
									}
									onClick={isMobile ? onToggleMenu : undefined}
								>
									{route.handler.title}
								</NavLink>
							</li>
						)
				)}
			</ul>
		</nav>
	);
}

export default MainMenu;