import { Link } from "react-router";
import styles from "./Page404.module.scss";
import frontRoutes from "@/router/frontRoutes";

function Page404() {
	return (
		<section className={styles.page404}>
			<div className={styles.container}>
				<h1 className={styles.code}>404</h1>
				<p className={styles.message}>Ой! Такої сторінки не існує 🚍</p>
				<Link to={frontRoutes.navigate.home} className={styles.homeBtn}>
					На головну
				</Link>
			</div>
		</section>
	);
}

export default Page404;