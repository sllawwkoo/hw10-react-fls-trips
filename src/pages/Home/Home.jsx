import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
	return (
		<section className={styles.home}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Подорожуй з <span>Bus Tours</span>
				</h1>
				<p className={styles.subtitle}>
					Автобусні тури та готелі для незабутніх мандрівок Європою.
				</p>
				<div className={styles.actions}>
					<Link
						to="/buses"
						className={styles.btnFirst}
					>
						🚌 Автобуси
					</Link>
					<Link
						to="/hotels"
						className={styles.btnSecondary}
					>
						🏨 Готелі
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Home;
