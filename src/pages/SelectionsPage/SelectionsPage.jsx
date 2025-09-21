import { useContext } from "react";
import styles from "./SelectionsPage.module.scss";
import { TravelContext } from "@/context/TravelContext";
import { useNavigate } from "react-router";
import { BUSES, HOTELS } from "@/data";
import frontRoutes from "@/router/frontRoutes";
import SelectionsList from "./components/SelectionsList/SelectionsList";
import ActionButton from "@/components/ActionButton/ActionButton";

function SelectionsPage() {
	const { selectedBuses, selectedHotels, removeBus, removeHotel } =
		useContext(TravelContext);
	const navigate = useNavigate();
	const isSelectedBuses = selectedBuses.length > 0;
	const isSelectedHotels = selectedHotels.length > 0;

	const goToBuses = () => navigate(frontRoutes.navigate.buses);
	const goToHotels = () => navigate(frontRoutes.navigate.hotels);

	return (
		<section className={styles.selections}>
			<div className={styles.container}>
				<h1 className={styles.title}>Результати вибору</h1>
				<h2 className={styles.subtitle}>
					{isSelectedBuses ? "Вибрані автобуси" : "Не вибрано жодного автобуса"}
				</h2>
				{isSelectedBuses ? (
					<SelectionsList
						data={BUSES}
						selectedData={selectedBuses}
						removeItem={removeBus}
					/>
				) : (
					<ActionButton
						label="Перейти до вибору автобусів"
						onAction={goToBuses}
					/>
				)}
				<h2 className={styles.subtitle}>
					{isSelectedHotels
						? "Вибрані готелі"
						: "Не вибрано жодного готелю"}
				</h2>
				{isSelectedHotels ? (
					<SelectionsList
						data={HOTELS}
						selectedData={selectedHotels}
						removeItem={removeHotel}
					/>
				) : (
					<ActionButton
						label="Перейти до вибору готелів"
						onAction={goToHotels}
					/>
				)}
			</div>
		</section>
	);
}

export default SelectionsPage;
