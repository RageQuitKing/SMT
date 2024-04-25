import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import MedicalCenter from "./routes/Maps/MedicalCenter/MedicalCenter";
import Forneus from "./routes/Bosses/Forneus";
import BishamontenBandou from "./routes/Bosses/bandou_bishamonten";

const router = createBrowserRouter([
	{
		path: "/SMT",
		element: <Root />,
	},
	{
		path: "/SMT/MedicalCenter",
		element: <MedicalCenter />,
	},
	{
		path: "/SMT/Forneus",
		element: <Forneus />,
	},

	{
		path: "/SMT/Bishamonten2",
		element: <BishamontenBandou />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
