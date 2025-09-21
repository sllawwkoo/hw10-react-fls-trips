import { TRAVEL_ACTIOB_TYPES } from "./travelActionTypes";

// Початковий стан для useReducer
export const initialState = {
	selectedBuses: [],
	selectedHotels: [],
};

// для керування вибором
export function travelReducer(state, action) {
	switch (action.type) {
		case TRAVEL_ACTIOB_TYPES.TOGGLE_BUS:
			return {
				...state,
				selectedBuses: state.selectedBuses.includes(action.id)
					? state.selectedBuses.filter((id) => id !== action.id)
					: [...state.selectedBuses, action.id],
			};
		case TRAVEL_ACTIOB_TYPES.TOGGLE_HOTEL:
			return {
				...state,
				selectedHotels: state.selectedHotels.includes(action.id)
					? state.selectedHotels.filter((id) => id !== action.id)
					: [...state.selectedHotels, action.id],
			};
		case TRAVEL_ACTIOB_TYPES.REMOVE_BUS:
			return {
				...state,
				selectedBuses: state.selectedBuses.filter((id) => id !== action.id),
			};
		case TRAVEL_ACTIOB_TYPES.REMOVE_HOTEL:
			return {
				...state,
				selectedHotels: state.selectedHotels.filter((id) => id !== action.id),
			};
		default:
			return state;
	}
}
