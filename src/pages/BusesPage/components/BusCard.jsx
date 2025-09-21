import styles from "./BusCard.module.scss";
import ActionButton from "@/components/ActionButton/ActionButton";

function BusCard({ bus, handleClickBus, isActive }) {
	let buttonText = isActive ? "Обрано" : "Вибрати";

	return (
		<div className={`${styles.card} ${isActive ? styles.active : ""}`}>
			<div className={styles.imageWrapper}>
				<img
					src={bus.url}
					alt={bus.route}
					className={styles.image}
				/>
			</div>
			<div className={styles.info}>
				<h2 className={styles.carrier}>{bus.carrier}</h2>
				<p className={styles.route}>{bus.route}</p>
				<p className={styles.price}>{bus.price} ₴</p>
			</div>
			<div className={styles.actions}>
				<ActionButton
					isActive={isActive}
					label={buttonText}
					onAction={handleClickBus}
				/>
			</div>
		</div>
	);
}

export default BusCard;
