import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes/AppRoutes";

import "./utils/i18n";

import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppRoutes />
	</StrictMode>
);
