import React from "react";
import "../../zMapFramework/MapPages.css";
export default function UnknownRealm({
	setSelectedRoom,
}: {
	setSelectedRoom: (newSelection: number) => void;
}) {
	return (
		<svg className="vector">
			<path
				onClick={() => {
					setSelectedRoom(45);
				}}
				d="M 243 362 l 15 0 l 0 -47 a 5 -5 0 0 1 5 -5 l 10 0 l 0 -15 l -10 0 a -5 -5 0 0 1 -5 -5 l 0 -89 l -15 0 l 0 48 a -5 5 0 0 1 -5 5 l -10 0 l 0 15 l 10 0 a 5 5 0 0 1 5 5 z"
				className="area"
			/>
			<path
				onClick={() => {
					setSelectedRoom(46);
				}}
				d="M 243 200.5 l 15 0 l 0 -49 a 5 -5 0 0 1 5 -5 l 20 0 a 15 -15 0 0 0 15 -15 l 0 -53 l -15 0 l 0 49 a -5 5 0 0 1 -5 5 l -55 0 a -5 -5 0 0 1 -5 -5 l 0 -49 l -15 0 l 0 53 a 15 15 0 0 0 15 15 l 20 0 a 5 5 0 0 1 5 5 z"
				className="area"
			/>
			<path
				onClick={() => {
					setSelectedRoom(47);
				}}
				d="M 218 78 l -15 0 l 0 -22 c -15 -5 -15 -32 0 -37 l 15 0 c 15 5 15 32 0 37 z"
				className="area"
			/>
			<path
				d="M 205 76.25 l 11 0 m -11 4 l 11 0 M 245 198.75 l 11 0 m -11 4 l 11 0"
				className="singledoors"
			/>
		</svg>
	);
}
