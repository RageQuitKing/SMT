import React from "react";
import "../zMapFramework/MapPages.css";

export default function MedicalCenterMapSelection({
	selectedMap,
	setSelectedMap,
}: {
	selectedMap: number;
	setSelectedMap: (newSelection: number) => void;
}) {
	return (
		<div className="map-container">
			<p>Map Selection</p>
			<button
				onClick={() => {
					setSelectedMap(3);
				}}
			>
				2F
			</button>
			<button
				onClick={() => {
					setSelectedMap(2);
				}}
			>
				1F
			</button>
			<button
				onClick={() => {
					setSelectedMap(1);
				}}
			>
				Underground Facility
			</button>
		</div>
	);
}
