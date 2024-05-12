import React, {useState} from "react";
import "../zMapFramework/MapPages.css";
import Page from "../../../page";
import MedicalCenterF1 from "./maps/F1";
import MedicalCenterF2 from "./maps/F2";
import MedicalCenterB1 from "./maps/B1";
import MedicalCenterMapSelection from "./MedicalCenterMapSelection";
import TableViewer from "../../../TableViewer";
import UndergroundFacilityHallwayEast from "./RoomInfo/UndergroundFacilityHallwayEast";
import UndergroundFacilityHealingRoom from "./RoomInfo/UndergroundHealingRoom";
import UndergroundFacilityBirthplace from "./RoomInfo/UndergroundFacilityBirthplace";
import MedicalCenter1FLobby from "./RoomInfo/MedicalCenter1FLobby";
import MedicalCenter1FHallwayEast from "./RoomInfo/MedicalCenter1FHallwayEast";
import MedicalCenter1FHallwayWest from "./RoomInfo/MedicalCenter1FHallwayWest";
import MedicalCenter1FStairsEast from "./RoomInfo/MedicalCenter1FStairsEast";
import MedicalCenter1FStairsWest from "./RoomInfo/MedicalCenter1FStairsWest";
import MedicalCenter2FStairsEast from "./RoomInfo/MedicalCenter2FStairsEast";
import MedicalCenter2FStairsWest from "./RoomInfo/MedicalCenter2FStairsWest";
import MedicalCenter2FHallway from "./RoomInfo/MedicalCenter2FHallway";
import MedicalCenter2FA201 from "./RoomInfo/MedicalCenter2FA201";
import MedicalCenter2FA202 from "./RoomInfo/MedicalCenter2FA202";
import MedicalCenter2FA203 from "./RoomInfo/MedicalCenter2FA203";
import MedicalCenter2FA204 from "./RoomInfo/MedicalCenter2FA204";
import MedicalCenter2FHallwayOppositeBridge from "./RoomInfo/MedicalCenter2FHallwayOppositeBridge";
import MedicalCenter2FHallwayToBridge from "./RoomInfo/MedicalCenter2FHallwayToBridge";
import MedicalCenter2FWalkway from "./RoomInfo/MedicalCenter2FWalkway";
import Annex2FHallwayToBridge from "./RoomInfo/Annex2FHallwayToBridge";
import Annex2FHallway from "./RoomInfo/Annex2FHallway";
import Annex2FHallwayOppositeBridge from "./RoomInfo/Annex2FHallwayOppositeBridge";
import Annex2FB201 from "./RoomInfo/Annex2FB201";
import Annex2FB202 from "./RoomInfo/Annex2FB202";
import Annex2FB203 from "./RoomInfo/Annex2FB203";
import Annex2FB204 from "./RoomInfo/Annex2FB204";
import Annex2FStairsEast from "./RoomInfo/Annex2FStairsEast";
import Annex1FStairsNorth from "./RoomInfo/Annex1FStairsNorth";
import Annex1FHallwayEast from "./RoomInfo/Annex1FHallwayEast";
import Annex1FStairsEast from "./RoomInfo/Annex1FStairsEast";
import UndergroundFacilityStairsEast from "./RoomInfo/UndergroundFacilityStairsEast";
import UndergroundFacilityHallwayCenter from "./RoomInfo/UndergroundFacilityHallwayCenter";
import UndergroundFacilityRoom1 from "./RoomInfo/UndergroundFacilityRoom1";
import UndergroundFacilityHallwayToLadder from "./RoomInfo/UndergroundFacilityHallwayToLadder";
import UndergroundFacilityRoom2 from "./RoomInfo/UndergroundFacilityRoom2";
import UndergroundFacilityRoom3 from "./RoomInfo/UndergroundFacilityRoom3";
import UndergroundFacilityLadderRoom from "./RoomInfo/UndergroundFacilityLadderRoom";
import Annex1FOutside from "./RoomInfo/Annex1FOutside";
import UndergroundFacilityHallwayWest from "./RoomInfo/UndergroundFacilityHallwayWest";
import UndergroundFacilityRoom4 from "./RoomInfo/UndergroundFacilityRoom4";
import UndergroundFacilityStairsWest from "./RoomInfo/UndergroundFacilityStairsWest";
import Annex1FStairsWest from "./RoomInfo/Annex1FStairsWest";
import Annex1FHallwayWest from "./RoomInfo/Annex1FHallwayWest";
import Annex1FHealingRoom from "./RoomInfo/Annex1FHealingRoom";
import Annex1FLobby from "./RoomInfo/Annex1FLobby";

const tablesMap = new Map([
	[1, <UndergroundFacilityHallwayEast key={1} />],
	[2, <UndergroundFacilityHealingRoom key={2} />],
	[3, <UndergroundFacilityBirthplace key={3} />],
	[4, <MedicalCenter1FLobby key={4} />],
	[5, <MedicalCenter1FHallwayEast key={5} />],
	[6, <MedicalCenter1FHallwayWest key={6} />],
	[7, <MedicalCenter1FStairsEast key={7} />],
	[8, <MedicalCenter1FStairsWest key={8} />],
	[9, <MedicalCenter2FStairsEast key={9} />],
	[10, <MedicalCenter2FStairsWest key={10} />],
	[11, <MedicalCenter2FHallway key={11} />],
	[12, <MedicalCenter2FA201 key={12} />],
	[13, <MedicalCenter2FA202 key={13} />],
	[14, <MedicalCenter2FA203 key={14} />],
	[15, <MedicalCenter2FA204 key={15} />],
	[16, <MedicalCenter2FHallwayOppositeBridge key={16} />],
	[17, <MedicalCenter2FHallwayToBridge key={17} />],
	[18, <MedicalCenter2FWalkway key={18} />],
	[19, <Annex2FHallwayToBridge key={19} />],
	[20, <Annex2FHallway key={20} />],
	[21, <Annex2FHallwayOppositeBridge key={21} />],
	[22, <Annex2FB201 key={22} />],
	[23, <Annex2FB202 key={23} />],
	[24, <Annex2FB203 key={24} />],
	[25, <Annex2FB204 key={25} />],
	[26, <Annex2FStairsEast key={26} />],
	[27, <Annex1FStairsNorth key={27} />],
	[28, <Annex1FHallwayEast key={28} />],
	[29, <Annex1FStairsEast key={29} />],
	[30, <UndergroundFacilityStairsEast key={30} />],
	[31, <UndergroundFacilityHallwayCenter key={31} />],
	[32, <UndergroundFacilityRoom1 key={32} />],
	[33, <UndergroundFacilityHallwayToLadder key={33} />],
	[34, <UndergroundFacilityRoom2 key={34} />],
	[35, <UndergroundFacilityRoom3 key={35} />],
	[36, <UndergroundFacilityLadderRoom key={36} />],
	[37, <Annex1FOutside key={37} />],
	[38, <UndergroundFacilityHallwayWest key={38} />],
	[39, <UndergroundFacilityRoom4 key={39} />],
	[40, <UndergroundFacilityStairsWest key={40} />],
	[41, <Annex1FStairsWest key={41} />],
	[42, <Annex1FHallwayWest key={42} />],
	[43, <Annex1FHealingRoom key={43} />],
	[44, <Annex1FLobby key={44} />],
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
