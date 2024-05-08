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
import YoyogiPark from "./routes/Maps/YoyogiPark/YoyogiPark";
import Shibuya from "./routes/Maps/Shibuya/Shibuya";
import AmalaNetwork1 from "./routes/Maps/AmalaNetwork1/AmalaNetwork1";
import AmalaNetwork2 from "./routes/Maps/AmalaNetwork2/AmalaNetwork2";
import Ginza from "./routes/Maps/Ginza/Ginza";

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
	{
		path: "/SMT/YoyogiPark",
		element: <YoyogiPark />,
	},
	{
		path: "/SMT/Shibuya",
		element: <Shibuya />,
	},
	{
		path: "/SMT/AmalaNetwork1",
		element: <AmalaNetwork1 />,
	},
	{
		path: "/SMT/AmalaNetwork2",
		element: <AmalaNetwork2 />,
	},
	{
		path: "/SMT/Ginza",
		element: <Ginza />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
