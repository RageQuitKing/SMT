import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import MedicalCenter from "./routes/Maps/MedicalCenter/MedicalCenter";
import Forneus from "./routes/Bosses/Forneus";
import BishamontenBandou from "./routes/Bosses/bandou_bishamonten";
import Jikokuten from "./routes/Bosses/Jikokuten";
import Komokuten from "./routes/Bosses/Komokuten";
import Zouchouten from "./routes/Bosses/Zouchouten";

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
	{
		path: "/SMT/Jikokuten",
		element: <Jikokuten />,
	},
	{
		path: "/SMT/Komokuten",
		element: <Komokuten />,
	},
	{
		path: "/SMT/Zouchouten",
		element: <Zouchouten />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
