import { useState, useContext } from "react";
import styles from "./HotelCard.module.scss";
import ActionButton from "@/components/ActionButton/ActionButton";
import { TravelContext } from "@/context/TravelContext";

function HotelCard({ hotel, handleClickHotel, isActive }) {
	let buttonText = isActive ? "Обрано" : "Вибрати";

	return (
		<div className={`${styles.card} ${isActive ? styles.active : ""}`}>
			<div className={styles.imageWrapper}>
				<img
					src={hotel.url}
					alt={hotel.hotel}
					className={styles.image}
				/>
			</div>
			<div className={styles.info}>
				<h2 className={styles.hotel}>{hotel.hotel}</h2>
				<p className={styles.city}>{hotel.city}</p>
				<p className={styles.price}>{hotel.price} ₴</p>
			</div>
			<div className={styles.actions}>
				<ActionButton
					isActive={isActive}
					label={buttonText}
					onAction={handleClickHotel}
				/>
			</div>
		</div>
	);
}

export default HotelCard;
