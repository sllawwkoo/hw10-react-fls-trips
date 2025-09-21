import styles from "./Header.module.scss";
import Logo from "./components/Logo/Logo";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import frontRoutes from "@/router/frontRoutes";
import MainMenu from "./components/MainMenu/MainMenu";

function Header() {
	const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });
	const [isOpen, setIsOpen] = useState(false);

	const path = useLocation().pathname;
	const isHomePage = path === frontRoutes.pages.home;

	const handleClickToggleMenu = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				{isHomePage ? (
					<div className={styles.logo}>
						<Logo />
					</div>
				) : (
					<Link
						to={frontRoutes.navigate.home}
						className={styles.logo}
					>
						<Logo />
					</Link>
				)}
				<MainMenu
					isOpen={isOpen}
					isMobile={isMobile}
					onToggleMenu={handleClickToggleMenu}
				/>
				<div className={styles.actions}>
					<ThemeSwitcher />
					{isMobile && (
						<BurgerMenu
							isOpen={isOpen}
							onOpenMenu={handleClickToggleMenu}
						/>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
