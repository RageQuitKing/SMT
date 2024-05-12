import React, {useState} from "react";
import "../zMapFramework/MapPages.css";
import Page from "../../../page";
import MedicalCenterF1 from "./maps/F1";
import MedicalCenterF2 from "./maps/F2";
import MedicalCenterB1 from "./maps/B1";
import MedicalCenterMapSelection from "./MedicalCenterMapSelection";
import TableViewer from "../../../TableViewer";
import AnnexLobby from "./RoomInfo/AnnexLobby";
import HospitalLobby from "./RoomInfo/HospitalLobby";

const tablesMap = new Map([
	[1, <AnnexLobby key={1} />],
	[2, <HospitalLobby key={2} />],
	[3, <HospitalLobby key={3} />],
	[4, <HospitalLobby key={4} />],
	[5, <HospitalLobby key={5} />],
	[6, <HospitalLobby key={6} />],
	[7, <HospitalLobby key={7} />],
	[8, <HospitalLobby key={8} />],
	[9, <HospitalLobby key={9} />],
	[10, <AnnexLobby key={10} />],
	[11, <HospitalLobby key={11} />],
	[12, <HospitalLobby key={12} />],
	[13, <HospitalLobby key={13} />],
	[14, <HospitalLobby key={14} />],
	[15, <HospitalLobby key={15} />],
	[16, <HospitalLobby key={16} />],
	[17, <HospitalLobby key={17} />],
	[18, <HospitalLobby key={18} />],
	[19, <AnnexLobby key={19} />],
	[20, <HospitalLobby key={20} />],
	[21, <HospitalLobby key={21} />],
	[22, <HospitalLobby key={22} />],
	[23, <HospitalLobby key={23} />],
	[24, <HospitalLobby key={24} />],
	[25, <HospitalLobby key={25} />],
	[26, <HospitalLobby key={26} />],
	[27, <HospitalLobby key={27} />],
	[28, <AnnexLobby key={28} />],
	[29, <HospitalLobby key={29} />],
	[30, <HospitalLobby key={30} />],
	[31, <HospitalLobby key={31} />],
	[32, <HospitalLobby key={32} />],
	[33, <HospitalLobby key={33} />],
	[34, <HospitalLobby key={34} />],
	[35, <HospitalLobby key={35} />],
	[36, <HospitalLobby key={36} />],
	[37, <AnnexLobby key={37} />],
	[38, <HospitalLobby key={38} />],
	[39, <HospitalLobby key={39} />],
	[40, <HospitalLobby key={40} />],
	[41, <HospitalLobby key={41} />],
	[42, <HospitalLobby key={42} />],
	[43, <HospitalLobby key={43} />],
	[44, <HospitalLobby key={44} />],
]);

export default function MedicalCenter() {
	const [selectedMap, setSelectedMap] = useState<number>(1);
	const [selectedRoom, setSelectedRoom] = useState<number>(-1);

	return (
		<Page>
			<p>Medical Center</p>
			<MedicalCenterMapSelection selectedMap={selectedMap} setSelectedMap={setSelectedMap} />
			{selectedMap === 1 && <MedicalCenterB1 setSelectedRoom={setSelectedRoom} />}
			{selectedMap === 2 && <MedicalCenterF1 setSelectedRoom={setSelectedRoom} />}
			{selectedMap === 3 && <MedicalCenterF2 setSelectedRoom={setSelectedRoom} />}
			<TableViewer tableIndex={selectedRoom} tablesMap={tablesMap} />
		</Page>
	);
}
