import { HOTELS } from "@/data";
import styles from "./HotelsPage.module.scss";
import HotelCard from "./components/HotelCard";
import { useContext } from "react";
import { TravelContext } from "@/context/TravelContext";

function HotelsPage() {
	const { toggleHotel, selectedHotels } = useContext(TravelContext);

	return (
		<section className={styles.hotels}>
			<div className={styles.container}>
				<h1 className={styles.title}>Виберіть готелі</h1>
				<div className={styles.cards}>
					{HOTELS.map((hotel) => (
						<HotelCard
							key={hotel.id}
							hotel={hotel}
							isActive={selectedHotels.includes(hotel.id)}
							handleClickHotel={() => toggleHotel(hotel.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default HotelsPage;