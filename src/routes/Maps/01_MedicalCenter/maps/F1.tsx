import React from "react";
import "../../zMapFramework/MapPages.css";
export default function MedicalCenterF1({
	setSelectedRoom,
}: {
	setSelectedRoom: (newSelection: number) => void;
}) {
	return (
		<svg className="vector">
			<style></style>

			{/*Hospital Lobby*/}
			<path
				onClick={() => {
					setSelectedRoom(4);
				}}
				d="M 401 135 l 50 0 l 0 15 l 15 0 l 0 15 l -15 0 l 0 90 l -15 0 l 0 -30 l -35 0 l 0 -60 l -16 0 l 0 -15 l 16 0 z  "
				className="area"
			/>
			{/*MedicalCenter1FHallwayWest*/}
			<path
				onClick={() => {
					setSelectedRoom(6);
				}}
				d="M334 60 l 15 0 l 0 90 l 35 0 l 0 15 l -50 0 z"
				className="area"
			/>
			{/*MedicalCenter1FHallwayEast*/}
			<path
				onClick={() => {
					setSelectedRoom(5);
				}}
				d="M 502 60 l 15 0 l 0 105 l -50 0 l 0 -15 l 35 0 z"
				className="area"
			/>
			{/*MedicalCenter1FStairwayWest*/}
			<path
				onClick={() => {
					setSelectedRoom(8);
				}}
				d="M 332 59 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z"
				className="area"
			/>
			{/*MedicalCenter1FStairwayEast*/}
			<path
				onClick={() => {
					setSelectedRoom(7);
				}}
				d="M 500 59 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z"
				className="area"
			/>
			{/*Annex1FHallwayWest*/}
			<path
				onClick={() => {
					setSelectedRoom(42);
				}}
				d="M 83 60 l 15 0 l 0 90 l 35 0 l 0 15 l -80 0 l 0 -15 l 30 0 z"
				className="area"
			/>
			{/*Annex1FStairsNorth*/}
			<path
				onClick={() => {
					setSelectedRoom(27);
				}}
				d="M 248 59 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z "
				className="area"
			/>
			{/*Annex1FStairsEast*/}
			<path
				onClick={() => {
					setSelectedRoom(29);
				}}
				d="M 296 147 l 20 0 l 0 10 l -10 0 l 0 10 l -10 0 z"
				className="area"
			/>
			{/*Annex1FStairsWest*/}
			<path
				onClick={() => {
					setSelectedRoom(41);
				}}
				d="M 52 147 l -10 0 l 0 10 l -10 0 l 0 10 l 20 0 z"
				className="area"
			/>

			{/*Annex Lobby*/}
			<path
				onClick={() => {
					setSelectedRoom(44);
				}}
				d="M 149 135 l 50 0 l 0 15 l 15 0 l 0 15 -15 0 l 0 60 l -35 0 l 0 30 l -15 0 l 0 -90 l -15 0 l 0 -15 l 15 0 z"
				className="area"
			/>
			{/*Annex1FHallwayEast*/}
			<path
				onClick={() => {
					setSelectedRoom(28);
				}}
				d="M 215 150 l 35 0 l 0 -90 l 15 0 l 0 90 l 30 0 l 0 15 l -80 0 z "
				className="area"
			/>
			{/*Annex1FOutside*/}
			<path
				onClick={() => {
					setSelectedRoom(37);
				}}
				d="M 149 80 l 50 0 l 0 -25 l -15 0 l 0 -20 l 25 0 l 0 -15 l -70 0 l 0 15 l 25 0 l 0 20 l -15 0 z"
				className="area"
			/>
			{/*Annex1FHealingRoom*/}
			<path
				onClick={() => {
					setSelectedRoom(43);
				}}
				d="M 52 75 l 30 0 l 0 30 l -30 0 z"
				className="area"
			/>
			<path
				d="M 416 113 l 20 0 l 0 20 l -20 0 z"
				fill="#0e1110"
				stroke="#3e311e"
				className="strokewidth1"
			/>
			<path
				d="M 416 113 m 7 6 l 6 0 l 0 1 l -5 0 l 0 2 l 4 0 l 0 1 l -4 0 l 0 3 l 5 0 l 0 1 l -6 0 z"
				fill="#f5efae"
				stroke="#f5efae"
				className="elevator2"
			/>
			<path d="M 80.5 39 l 20 0 l 0 20 l -20 0 z" className="terminal1" />
			<path
				d="M 80.5 39 m 10 3 l 3 1.5 l 0 9 l 1 1 l 0 3 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -3 l 1 -1 l 0 -9 z"
				className="terminal2"
			/>
			<path d="M 57 80 l 20 0 l 0 20 l -20 0 z" className="fountain" />
			<ellipse cx="67" cy="90" rx="8" ry="6" fill="#c2e8e9"></ellipse>
			<ellipse cx="67" cy="90" rx="7" ry="5" fill="#0e1110"></ellipse>
			<ellipse cx="67" cy="90" rx="6" ry="4.6" fill="#c2e8e9"></ellipse>
			<ellipse cx="67" cy="89" rx="4.6" ry="3.6" fill="#0e1110"></ellipse>
			<path d="M 154 65 l 8 0 l -4 8 l 4 0 l 0 2 l -8 0 l 0 -2 l 4 0 z" className="arrow" />
			<path
				d="
				M 34 157.5 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9
				M 308 147.5 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9
				M 258.5 39 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0
				M 342.5 39 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0
				M 510.5 39 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0 m -9 2 l 9 0"
				className="stairs"
			/>
			<path
				d="
				M 420.5 136.75 l 11 0
				
				M 151 253.25 l 11 0

				M 85 61.75 l 11 0
				
				M 252 57.25 l 11 0  m -11 4.5 l 11 0
				
				M 336 57.25 l 11 0  m -11 4.5 l 11 0

				M 504 57.25 l 11 0  m -11 4.5 l 11 0

				M 80.25 84 l 0 11 m 4.5 -11 l 0 11

				M 50.25 152 l 0 11 m 4.5 -11 l 0 11
				
				M 131.25 152 l 0 11 m 4.5 -11 l 0 11
				
				M 212.25 152 l 0 11 m 4.5 -11 l 0 11
				
				M 293.25 152 l 0 11 m 4.5 -11 l 0 11
				
				M 382.25 152 l 0 11 m 4.5 -11 l 0 11
				
				M 464.25 152 l 0 11 m 4.5 -11 l 0 11"
				className="singledoors"
			/>
			{/* <path
				d=" M 401 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -65 0 l 0 90 l -15 0 l 0 -30 l -35 0 l 0 -60 l -65 0 l 0 -105 l 15 0 l 0 90 l 50 0 z M 149 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 90 l 30 0 l 0 15 l -95 0 l 0 60 l -35 0 l 0 30 l -15 0 l 0 -90 l -95 0 l 0 -15 l 30 0 l 0 -90 l 15 0 l 0 90 l 50 0 z M 247 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z M 333.8 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z M 499 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z M 294 147 l 20 0 l 0 10 l -10 0 l 0 10 l -10 0 z M 54 147 l -10 0 l 0 10 l -10 0 l 0 10 l 20 0 z M 134 150 l 0 15 M 214 150 l 0 15 M 385 150 l 0 15 M 465 150 l 0 15 M 149 80 l 50 0 l 0 -25 l -15 0 l 0 -20 l 25 0 l 0 -15 l -70 0 l 0 15 l 25 0 l 0 20 l -15 0 z M 54 75 l 30 0 l 0 30 l -30 0 z"
				className="perimeter"
			/> */}
			<text x="147" y="264" className="text">
				EXIT
			</text>
		</svg>
	);
}
