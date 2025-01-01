import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes/AppRoutes";

import "./utils/i18n";

import "./index.css";
import { store } from "./state/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	</StrictMode>
);
