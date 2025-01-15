import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import AppRoutes from "./routes/AppRoutes";

import "./utils/i18n/locales";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppRoutes />
		</QueryClientProvider>
	</StrictMode>
);
