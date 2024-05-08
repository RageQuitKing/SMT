import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import MedicalCenter from "./routes/Maps/01_MedicalCenter/MedicalCenter";
import Forneus from "./routes/Bosses/Forneus";
import BishamontenBandou from "./routes/Bosses/bandou_bishamonten";
import Jikokuten from "./routes/Bosses/Jikokuten";
import Komokuten from "./routes/Bosses/Komokuten";
import Zouchouten from "./routes/Bosses/Zouchouten";
import YoyogiPark from "./routes/Maps/02_YoyogiPark/YoyogiPark";
import Shibuya from "./routes/Maps/03_Shibuya/Shibuya";
import AmalaNetwork1 from "./routes/Maps/04_AmalaNetwork1/AmalaNetwork1";
import AmalaNetwork2 from "./routes/Maps/AmalaNetwork2/AmalaNetwork2";
import Ginza from "./routes/Maps/05_Ginza/Ginza";
import HarumiWarehouse from "./routes/Maps/06_HarumiWarehouse/HarumiWarehouse";
import GreatUnderpass from "./routes/Maps/07_GreatUnderpass/GreatUnderpass";
import Ikebukuro from "./routes/Maps/08_Ikebukuro/Ikebukuro";
import MantraHeadquarters from "./routes/Maps/09_MantraHeadquarters/MantraHeadquarters";
import AssemblyOfNihilo from "./routes/Maps/10_AssemblyOfNihilo/AssemblyOfNihilo";

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
	{
		path: "/SMT/Harumi",
		element: <HarumiWarehouse />,
	},
	{
		path: "/SMT/GreatUnderpass",
		element: <GreatUnderpass />,
	},
	{
		path: "/SMT/Ikebukuro",
		element: <Ikebukuro />,
	},
	{
		path: "/SMT/MantraHeadquarters",
		element: <MantraHeadquarters />,
	},
	{
		path: "/SMT/AssemblyOfNihilo",
		element: <AssemblyOfNihilo />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
