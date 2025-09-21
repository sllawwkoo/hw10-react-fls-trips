import styles from "./BusesPage.module.scss";
import { BUSES } from "@/data";
import BusCard from "./components/BusCard";
import { useContext } from "react";
import { TravelContext } from "@/context/TravelContext";

function BusesPage() {
	const { toggleBus, selectedBuses } = useContext(TravelContext);

	return (
		<section className={styles.buses}>
			<div className={styles.container}>
				<h1 className={styles.title}>Виберіть автобуси</h1>
				<div className={styles.cards}>
					{BUSES.map((bus) => (
						<BusCard
							key={bus.id}
							bus={bus}
							isActive={selectedBuses.includes(bus.id)}
							handleClickBus={() => toggleBus(bus.id)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default BusesPage;
