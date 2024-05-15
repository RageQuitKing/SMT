import React from "react";
import "../../zMapFramework/MapPages.css";
export default function MedicalCenterB1({
	setSelectedRoom,
}: {
	setSelectedRoom: (newSelection: number) => void;
}) {
	return (
		<svg className="vector">
			{/*UndergroundFacilityHallwayEast*/}
			<path
				onClick={() => {
					setSelectedRoom(1);
				}}
				d="M 426 135 l 25 0 l 0 30 l -17.5 0 l 0 105 l -32 0 l 0 30 l -15 0 l 0 -30 l -75 0 l 0 30 l -15 0 l 0 -30 l -50 0 l 0 -15 l 95 0 l 0 -30 l 15 0 l 0 30 l 62 0 l 0 -90 l -17.5 0 l 0 -30 z"
				className="area"
			/>
			{/*UndergroundFacilityHallwayCenter*/}
			<path
				onClick={() => {
					setSelectedRoom(31);
				}}
				d="M 245.5 255 l 0 15 l -65 0 l 0 15 l -45 0 l 0 -30 l 70 0 l 0 -105 l 89.5 0 l 0 15 l -74.5 0 l 0 90 z"
				className="area"
			/>
			{/*UndergroundFacilityHallwayWest*/}
			<path
				onClick={() => {
					setSelectedRoom(38);
				}}
				d="M 134.5 270 l 0 -15 l -37 0 l 0 -105 l -45 0 l 0 15 l 30 0 l 0 105 z"
				className="area"
			/>
			{/*UndergroundFacilityHallwayToLadder*/}
			<path
				onClick={() => {
					setSelectedRoom(33);
				}}
				d="M 166 254 l -15 0 l 0 -165 l 15 0 z"
				className="area"
			/>
			{/*UndergroundFacilityStairsWest*/}
			<path
				onClick={() => {
					setSelectedRoom(40);
				}}
				d="M 51.5 147 l 0 20 l -10 0 l 0 -10 l -10 0 l 0 10 l -10 0 l 0 -20 z"
				className="area"
			/>
			{/*UndergroundFacilityStairsEast*/}
			<path
				onClick={() => {
					setSelectedRoom(30);
				}}
				d="M 296 147 l 0 20 l 30 0 l 0 -20 l -10 0 l 0 10 l -10 0 l 0 -10 z"
				className="area"
			/>
			{/*UndergroundFacilityLadderRoom*/}
			<path
				onClick={() => {
					setSelectedRoom(36);
				}}
				d="M 144 88 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityBirthplace*/}
			<path
				onClick={() => {
					setSelectedRoom(3);
				}}
				d="M 289 331 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityHealingRoom*/}
			<path
				onClick={() => {
					setSelectedRoom(2);
				}}
				d="M 379 331 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityRoom1*/}
			<path
				onClick={() => {
					setSelectedRoom(32);
				}}
				d="M 221.5 235 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityRoom2*/}
			<path
				onClick={() => {
					setSelectedRoom(34);
				}}
				d="M 167 235 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityRoom4*/}
			<path
				onClick={() => {
					setSelectedRoom(39);
				}}
				d="M 51.5 235 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityRoom3*/}
			<path
				onClick={() => {
					setSelectedRoom(35);
				}}
				d="M 167 173 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/* <!--1 Sided Doors--> */}
			<path
				d="
            M 343.5 226.75 l 11 0
            
			M 420.5 136.75 l 11 0
            
			M 49.75 152 l 0 11 m 4.5 -11 l 0 11
            
			M 79.75 214 l 0 11 m 4.5 -11 l 0 11
            
			M 132.75 257 l 0 11 m 4.5 -11 l 0 11
            
			M 243.75 257 l 0 11 m 4.5 -11 l 0 11
            
			M 164.25 215 l 0 11 m 4.5 -11 l 0 11
            
			M 164.25 152 l 0 11 m 4.5 -11 l 0 11
            
			M 293.25 152 l 0 11 m 4.5 -11 l 0 11
            
			M 218.75 215 l 0 11 m 4.5 -11 l 0 11
            
			M 153 252.25 l 11 0 m -11 4.5 l 11 0
            
			M 153 86.25 l 11 0 m -11 4.5 l 11 0
            
			M 298.5 298.25 l 11 0 m -11 4.5 l 11 0
            
			M 388.5 298.25 l 11 0 m -11 4.5 l 11 0"
				className="singledoors"
			/>
			{/* <!--Elevator--> */}
			<path d="M 416 113 l 20 0 l 0 20 l -20 0 z" className="elevator1" />
			<path
				d="M 416 113 m 7 6 l 6 0 l 0 1 l -5 0 l 0 2 l 4 0 l 0 1 l -4 0 l 0 3 l 5 0 l 0 1 l -6 0 z"
				className="elevator2"
			/>
			{/* <!--arrow pointing up--> */}
			<path d="M 155 65 m 4 0 l 4 8 l -8 0 m 0 2 l 8 0 l 0 -2 l -8 0 z" className="arrow" />
			{/* <!--Fountain of Life--> */}
			<path d="M384 306 l 20 0 l 0 20 l -20 0 z" className="fountain" />
			<ellipse cx="394" cy="316" rx="8" ry="6" fill="#c2e8e9" />
			<ellipse cx="394" cy="315.8" rx="7" ry="5" fill="#0e1110" />
			<ellipse cx="394" cy="315.8" rx="6" ry="4.6" fill="#c2e8e9" />
			<ellipse cx="394" cy="314.7" rx="4.6" ry="3.6" fill="#0e1110" />
			{/* <!--Terminal--> */}
			<path d="M 339 203 l 20 0 l 0 20 l -20 0 z" className="terminal1" />
			<path
				d="M 339 203 m 10 3 l 3 1.5 l 0 9 l 1 1 l 0 3 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -3 l 1 -1 l 0 -9 z"
				className="terminal2"
			/>
			{/* <!--Stairs--> */}
			<path
				d="
            M 31.5 147.5 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9
            
            M 308 157.5 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9 m 2 -9 l 0 9"
				className="stairs"
			/>
		</svg>
	);
}
