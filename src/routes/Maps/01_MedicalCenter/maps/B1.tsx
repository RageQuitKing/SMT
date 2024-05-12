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
				d="M 246 255 l 0 15 l -65 0 l 0 15 l -45 0 l 0 -30 l 70 0 l 0 -105 l 87 0 l 0 15 l -72 0 l 0 90 z"
				className="area"
			/>
			{/*UndergroundFacilityHallwayWest*/}
			<path
				onClick={() => {
					setSelectedRoom(38);
				}}
				d="M 136 270 l 0 -15 l -37 0 l 0 -105 l -45 0 l 0 15 l 30 0 l 0 105 z"
				className="area"
			/>
			{/*UndergroundFacilityHallwayToLadder*/}
			<path
				onClick={() => {
					setSelectedRoom(33);
				}}
				d="M 166 255 l -15 0 l 0 -165 l 15 0 z"
				className="area"
			/>
			{/*UndergroundFacilityStairsWest*/}
			<path
				onClick={() => {
					setSelectedRoom(40);
				}}
				d="M 54 147 l 0 20 l -10 0 l 0 -10 l -10 0 l 0 10 l -10 0 l 0 -20 z"
				className="area"
			/>
			{/*UndergroundFacilityStairsEast*/}
			<path
				onClick={() => {
					setSelectedRoom(30);
				}}
				d="M 294 147 l 0 20 l 30 0 l 0 -20 l -10 0 l 0 10 l -10 0 l 0 -10 z"
				className="area"
			/>
			{/*UndergroundFacilityLadderRoom*/}
			<path
				onClick={() => {
					setSelectedRoom(36);
				}}
				d="M 144 90 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityBirthplace*/}
			<path
				onClick={() => {
					setSelectedRoom(3);
				}}
				d="M 289 330 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityHealingRoom*/}
			<path
				onClick={() => {
					setSelectedRoom(2);
				}}
				d="M 379 330 l 30 0 l 0 -30 l -30 0 z"
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
				d="M 166.5 235 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityRoom4*/}
			<path
				onClick={() => {
					setSelectedRoom(39);
				}}
				d="M 54.5 235 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*UndergroundFacilityRoom3*/}
			<path
				onClick={() => {
					setSelectedRoom(35);
				}}
				d="M 166.5 173 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/* <!--1 Sided Doors--> */}
			<path
				d="
            M 343.5 226.5 l 11 0
            M 421 136.5 l 11 0"
				className="singledoors"
			/>
			{/* <!--2 Sided Doors--> */}
			<path
				d="
            M 54 152 l 0 11
            M 84.5 214 l 0 11
            M 136.5 257 l 0 11
            M 246 257 l 0 11
            M 166.5 215 l 0 11
            M 166.5 152 l 0 11
            M 294 152 l 0 11
            M 221.5 215 l 0 11
            
            M 153.5 255 l 11 0
            M 153.5 90 l 11 0
            M 298.5 300 l 11 0
            M 388.5 300 l 11 0"
				className="doubledoors"
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
			<path d="M384 305 l 20 0 l 0 20 l -20 0 z" className="fountain" />
			<ellipse cx="394" cy="315" rx="8" ry="6" fill="#c2e8e9" />
			<ellipse cx="394" cy="314.8" rx="7" ry="5" fill="#0e1110" />
			<ellipse cx="394" cy="314.8" rx="6" ry="4.6" fill="#c2e8e9" />
			<ellipse cx="394" cy="313.7" rx="4.6" ry="3.6" fill="#0e1110" />
			{/* <!--Terminal--> */}
			<path d="M 339 203 l 20 0 l 0 20 l -20 0 z" className="terminal1" />
			<path
				d="M 339 203 m 10 3 l 3 1.5 l 0 9 l 1 1 l 0 3 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -3 l 1 -1 l 0 -9 z"
				className="terminal2"
			/>
			{/* <!--Outline--> */}
			<path
				d="M 426 135 l 25 0 l 0 30 l -17.5 0 l 0 105 l -32 0 l 0 30 l -15 0 l 0 -30 l -75 0 l 0 30 l -15 0 l 0 -30 l -115 0 l 0 15 l -45 0 l 0 -15 l -52 0 l 0 -105 l -30.5 0 l 0 -15 l 45.5 0 l 0 105 l 52 0 l 0 -165 l 15 0 l 0 165 l 40 0 l 0 -105 l 87 0 l 0 15 l -72 0 l 0 90 l 120 0 l 0 -30 l 15 0 l 0 30 l 62 0 l 0 -90 l -17.5 0 l 0 -30 z
            
            M 54 147 l 0 20 l -10 0 l 0 -10 l -10 0 l 0 10 l -10 0 l 0 -20 z
            
            M 294 147 l 0 20 l 30 0 l 0 -20 l -10 0 l 0 10 l -10 0 l 0 -10 z
            
            M 144 90 l 30 0 l 0 -30 l -30 0 z
            
            M 289 330 l 30 0 l 0 -30 l -30 0 z
            
            M 379 330 l 30 0 l 0 -30 l -30 0 z
            
            M 221.5 235 l 30 0 l 0 -30 l -30 0 z
            
            M 166.5 235 l 30 0 l 0 -30 l -30 0 z
            
            M 54.5 235 l 30 0 l 0 -30 l -30 0 z
            
            M 166.5 173 l 30 0 l 0 -30 l -30 0 z
            
            M 136.5 255 l 0 15
            
            M 151 255 l 15 0
            
            M 246 255 l 0 15"
				className="perimeter"
			/>
			{/* <!--Stairs--> */}
			<path
				d="
            M 34 147 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10
            
            M 306 157 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10"
				className="stairs"
			/>
		</svg>
	);
}
