import styles from "./Footer.module.scss";

function Footer() {
	return (
		<footer className={styles.container}>
			<p className={styles.copyright}>
				©2025 <span> Bus Tours</span>. Всі права захищені.
			</p>
		</footer>
	);
}

export default Footer;