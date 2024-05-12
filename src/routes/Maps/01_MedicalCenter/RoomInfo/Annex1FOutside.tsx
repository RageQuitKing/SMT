import React from "react";
import "../MedicalCenter.css";
export default function Annex1FOutside() {
	return (
		<>
			<h1 className="roomname">Annex 1F</h1>
			<ul>
				<li>Items</li>
				<table className="itemtable">
					<tr>
						<th className="items">Item</th>
						<th className="qty">Qty.</th>
						<th>From</th>
					</tr>
					<tr>
						<td>Mazio Rock</td>
						<td>1</td>
						<td>Cache cube</td>
					</tr>
					<tr>
						<td>Mabufu Rock</td>
						<td>1</td>
						<td>Cache cube</td>
					</tr>
					<tr>
						<td>300 Macca</td>
						<td></td>
						<td>Cache cuve</td>
					</tr>
				</table>
			</ul>
		</>
	);
}
