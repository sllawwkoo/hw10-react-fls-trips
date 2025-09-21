import { createBrowserRouter } from "react-router";
import frontRoutes from "./frontRoutes";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home/Home";
import BusesPage from "@/pages/BusesPage/BusesPage";
import Page404 from "@/pages/Page404/Page404";
import HotelsPage from "@/pages/HotelsPage/HotelsPage";
import SelectionsPage from "@/pages/SelectionsPage/SelectionsPage";


export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: frontRoutes.navigate.buses,
				Component: BusesPage,
				handler: {
					title: "Автобуси",
				},
			},
			{
				path: frontRoutes.navigate.hotels,
				Component: HotelsPage,
				handler: {
					title: "Готелі",
				},
			},
			{
				path: frontRoutes.navigate.selections,
				Component: SelectionsPage,
				handler: {
					title: "Мій вибір",
				},
			},
			{
				path: "*",
				Component: Page404,
			}
		],
	},
]

const router = createBrowserRouter(routes);

export default router;