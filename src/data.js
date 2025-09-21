import BUS_1 from "./assets/img/buses/bus_1.webp";
import BUS_2 from "./assets/img/buses/bus_2.webp";
import BUS_3 from "./assets/img/buses/bus_3.webp";
import BUS_4 from "./assets/img/buses/bus_4.webp";
import BUS_5 from "./assets/img/buses/bus_5.webp";
import BUS_6 from "./assets/img/buses/bus_6.webp";
import HOTEL_1 from "./assets/img/hotels/hotel_1.webp";
import HOTEL_2 from "./assets/img/hotels/hotel_2.webp";
import HOTEL_3 from "./assets/img/hotels/hotel_3.webp";
import HOTEL_4 from "./assets/img/hotels/hotel_4.webp";
import HOTEL_5 from "./assets/img/hotels/hotel_5.webp";
import HOTEL_6 from "./assets/img/hotels/hotel_6.webp";

// Дані для автобусів
export const BUSES = [
	{
		id: 1,
		url: BUS_1,
		price: 1250,
		carrier: "EuroLux Express",
		route: "Київ-Краків",
	},
	{
		id: 2,
		url: BUS_2,
		price: 980,
		carrier: "Night Rider Transport",
		route: "Київ-Варшава",
	},
	{
		id: 3,
		url: BUS_3,
		price: 1450,
		carrier: "City Premium Lines",
		route: "Київ-Прага",
	},
	{
		id: 4,
		url: BUS_4,
		price: 890,
		carrier: "Metropolitan Coach",
		route: "Київ-Львів",
	},
	{
		id: 5,
		url: BUS_5,
		price: 1680,
		carrier: "Forest Express",
		route: "Київ-Берлін",
	},
	{
		id: 6,
		url: BUS_6,
		price: 1120,
		carrier: "Urban Transit Pro",
		route: "Київ-Будапешт",
	},
];

// Дані для готелів
export const HOTELS = [
	{
		id: 1,
		url: HOTEL_1,
		price: 2800,
		hotel: "Castle Boutique Hotel",
		city: "Краків",
	},
	{
		id: 2,
		url: HOTEL_2,
		price: 3200,
		hotel: "Hampton by Hilton",
		city: "Варшава",
	},
	{
		id: 3,
		url: HOTEL_3,
		price: 4500,
		hotel: "Grand Palace Prague",
		city: "Прага",
	},
	{
		id: 4,
		url: HOTEL_4,
		price: 3600,
		hotel: "Metropolitan Boutique",
		city: "Львів",
	},
	{
		id: 5,
		url: HOTEL_5,
		price: 4200,
		hotel: "Berlin Central Hotel",
		city: "Берлін",
	},
	{
		id: 6,
		url: HOTEL_6,
		price: 3900,
		hotel: "Budapest Royal Palace",
		city: "Будапешт",
	},
];