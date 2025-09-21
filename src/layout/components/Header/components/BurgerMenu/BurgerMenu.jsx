import styles from "./BurgerMenu.module.scss";

function BurgerMenu({ isOpen, onOpenMenu }) {
	return (
		<button
			className={`${styles.icon_menu} ${isOpen ? styles.open_menu : ""}`}
			onClick={onOpenMenu}
		>
			<span></span>
		</button>
	);
}

export default BurgerMenu;
