import { useReducer } from "react";
import { initialState, travelReducer } from "./travelReducer";
import { TRAVEL_ACTIOB_TYPES } from "./travelActionTypes";
import { TravelContext } from "@/context/TravelContext";

function TravelProvider({ children }) {
	//useReducer
	const [state, dispatch] = useReducer(travelReducer, initialState);

	// Функції-диспатчери
	const toggleBus = (busId) =>
		dispatch({ type: TRAVEL_ACTIOB_TYPES.TOGGLE_BUS, id: busId });
	const toggleHotel = (hotelId) =>
		dispatch({ type: TRAVEL_ACTIOB_TYPES.TOGGLE_HOTEL, id: hotelId });
	const removeBus = (busId) =>
		dispatch({ type: TRAVEL_ACTIOB_TYPES.REMOVE_BUS, id: busId });
	const removeHotel = (hotelId) =>
		dispatch({ type: TRAVEL_ACTIOB_TYPES.REMOVE_HOTEL, id: hotelId });

	return (
		<TravelContext
			value={{
				selectedBuses: state.selectedBuses,
				selectedHotels: state.selectedHotels,
				toggleBus,
				toggleHotel,
				removeBus,
				removeHotel,
			}}
		>
			{children}
		</TravelContext>
	);
}

export default TravelProvider;
