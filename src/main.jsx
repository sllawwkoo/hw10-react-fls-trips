import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import ThemeProvider from "./providers/ThemeProvider";
import TravelProvider from "./providers/TravelProvider";


createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<TravelProvider>
			<App />
		</TravelProvider>
	</ThemeProvider>
);
