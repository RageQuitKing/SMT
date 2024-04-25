import React from "react";
import "../MapSelection/MapSelection.css";

export default function MedicalCenterMapSelection() {
	return (
		<div className="map-container">
			<p>Map Selection</p>
			<button>Second Floor</button>
			<button>First Floor</button>
			<button>Underground Facility</button>
		</div>
	);
}
