import React from "react";
import "../../zMapFramework/MapPages.css";
export default function MedicalCenterF2({
	setSelectedRoom,
}: {
	setSelectedRoom: (newSelection: number) => void;
}) {
	return (
		<svg className="vector">
			<path d="M 416 113 l 20 0 l 0 20 l -20 0 z" className="elevator1" />
			<path
				d="M 416 113 m 7 6 l 6 0 l 0 1 l -5 0 l 0 2 l 4 0 l 0 1 l -4 0 l 0 3 l 5 0 l 0 1 l -6 0 z"
				className="elevator2"
			/>

			{/*MedicalCenter2FHallway*/}
			<path
				onClick={() => {
					setSelectedRoom(11);
				}}
				d="M 401 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z"
				className="area"
			/>
			{/*MedicalCenter2FHallwayToBridge*/}
			<path
				onClick={() => {
					setSelectedRoom(17);
				}}
				d=" M 401 165 l 0 75 l -15 0 l 0 -15 l -37 0 l 0 -15 l 37 0 l 0 -45 z"
				className="area"
			/>
			{/*Walkway*/}
			<path
				onClick={() => {
					setSelectedRoom(18);
				}}
				d="M 247 210 l 102 0 l 0 15 l -102 0 z"
				className="area"
			/>
			{/*MedicalCenter2FHallwayOppositeBridge*/}
			<path
				onClick={() => {
					setSelectedRoom(16);
				}}
				d="M 451 165 l 0 75 l 15 0 l 0 -75 z"
				className="area"
			/>
			{/*MedicalCenter2FA203*/}
			<path
				onClick={() => {
					setSelectedRoom(14);
				}}
				d="M 306 120 l 30 0 l 0 30 l -30 0 z"
				className="area"
			/>
			{/*MedicalCenter2FA204*/}
			<path
				onClick={() => {
					setSelectedRoom(15);
				}}
				d="M 306 105 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*MedicalCenter2FA201*/}
			<path
				onClick={() => {
					setSelectedRoom(12);
				}}
				d="M 516 105 l 30 0 l 0 -30 l -30 0 z"
				className="area"
			/>
			{/*MedicalCenter2FA202*/}
			<path
				onClick={() => {
					setSelectedRoom(13);
				}}
				d=" M 516 120 l 30 0 l 0 30 l -30 0 z"
				className="area"
			/>
			{/*MedicalCenter2FStairsEast*/}
			<path
				onClick={() => {
					setSelectedRoom(9);
				}}
				d="M 499 60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z"
				className="area"
			/>
			{/*MedicalCenter2FStairsWest*/}
			<path
				onClick={() => {
					setSelectedRoom(10);
				}}
				d="M 334 60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z"
				className="area"
			/>
			{/*Annex2FHallway*/}
			<path
				onClick={() => {
					setSelectedRoom(20);
				}}
				d="M 149 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z"
				className="area"
			/>
			{/*Annex2FStairsEast*/}
			<path
				onClick={() => {
					setSelectedRoom(26);
				}}
				d="M 247 60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z"
				className="area"
			/>
			{/*Annex2FB203*/}
			<path
				onClick={() => {
					setSelectedRoom(24);
				}}
				d="M 84 150 l -30 0 l 0 -30 l 30 0 z"
				className="area"
			/>
			{/*Annex2FB204*/}
			<path
				onClick={() => {
					setSelectedRoom(25);
				}}
				d="M 84 105 l -30 0 l 0 -30 l 30 0 z"
				className="area"
			/>
			{/*Annex2FB201*/}
			<path
				onClick={() => {
					setSelectedRoom(22);
				}}
				d="M 264 75 l 30 0 l 0 30 l -30 0 z"
				className="area"
			/>
			{/*Annex2FB202*/}
			<path
				onClick={() => {
					setSelectedRoom(23);
				}}
				d="M 264 120 l 30 0 l 0 30 l -30 0 z"
				className="area"
			/>
			{/*Annex2FHallwayOppositeBridge*/}
			<path
				onClick={() => {
					setSelectedRoom(21);
				}}
				d="M 149 165 l 0 75 l -15 0 l 0 -75 z"
				className="area"
			/>
			{/*Annex2FHallwayToBridge*/}
			<path
				onClick={() => {
					setSelectedRoom(19);
				}}
				d="M 199 165 l 15 0 l 0 45 l 33 0 l 0 15 l -33 0 l 0 15 l -15 0 z"
				className="area"
			/>
			<path
				d="M 416 113 
 m 83 -71 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0
 m -175 -6 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0
 m -97 -6 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0"
				className="stairs"
			/>
			<path
				d="M 416 113
 m 4.5 23.5 l 11 0"
				className="singledoors"
			/>
			<path
				d="	
 M 338 60 l 11 0
 M 503 60 l 11 0
 M 251 60 l 11 0
 M 84 85 l 0 11
 M 264 85 l 0 11
 M 336 85 l 0 11
 M 516 85 l 0 11
 m -432 33 l 0 11
 m 180 -11 l 0 11
 m 72 -11 l 0 11
 m 180 -11 l 0 11
 m -380 25 l 11 0
 m 54 0 l 11 0
 m 176 0 l 11 0
 m 54 0 l 11 0
 m -217 47 l 0 11
 m 102 -11 l 0 11"
				className="singledoors"
			/>
			<path
				d="M 416 113 
 m -15 22 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z
 m 0 30 l 0 75 l -15 0 l 0 -15 l -172 0 l 0 15 l -15 0 l 0 -75 l 15 0 l 0 45 l 172 0 l 0 -45 z
 m 50 0 l 0 75 l 15 0 l 0 -75 z
 m -302 -30 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z
 m 0 30 l 0 75 l -15 0 l 0 -75 z
 m -65 -15 l -30 0 l 0 -30 l 30 0 z
 m -30 -45 l 0 -30 l 30 0 l 0 30 z
 m 210 -30 l 30 0 l 0 30 l -30 0 z
 m 0 45 l 30 0 l 0 30 l -30 0 z
 m 42 0 l 30 0 l 0 30 l -30 0 z
 m 0 -15 l 30 0 l 0 -30 l -30 0 z
 m 210 0 l 30 0 l 0 -30 l -30 0 z
 m 0 15 l 30 0 l 0 30 l -30 0 z
 m -17 -60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z
 m -165 0 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z
 m -87 0 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z
 m 0 150 l 0 15 m 102 0 l 0 -15"
				className="perimeter"
			/>
		</svg>
	);
}
