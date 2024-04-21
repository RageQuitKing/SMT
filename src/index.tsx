import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import MedicalCenter from "./routes/MedicalCenter";

const router = createMemoryRouter([
	{
		path: "/SMT",
		element: <Root />,
	},
	{
		path: "/SMT/MedicalCenter",
		element: <MedicalCenter />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
