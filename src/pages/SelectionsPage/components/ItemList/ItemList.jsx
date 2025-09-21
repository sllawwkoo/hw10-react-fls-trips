import ActionButton from "@/components/ActionButton/ActionButton";
import styles from "./ItemList.module.scss";
function ItemList({ data, removeItem }) {
	return (
		<div className={styles.card}>
			<div className={styles.imageWrapper}>
				<img
					src={data.url}
					alt={data.route ?? data.city}
					className={styles.image}
				/>
			</div>
			<p className={styles.direction}>{data.route ?? data.city}</p>
			<p className={styles.info}>{data.carrier ?? data.hotel}</p>
			<p className={styles.price}>{data.price} ₴</p>
			<ActionButton
				label="Видалити"
				onAction={() => removeItem(data.id)}
			/>
		</div>
	);
}

export default ItemList;
