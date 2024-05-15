import React from "react";
import "../MedicalCenter.css";
export default function UnknownRealm2() {
	return (
		<>
			<h1>Unknown Realm</h1>
			<ul>
				<li>Items</li>
				<table className="itemtable">
					<tr>
						<th className="items">Items</th>
						<th className="qty">Qty.</th>
						<th>From</th>
					</tr>
					<tr>
						<td>Maragi Rock</td>
						<td>1</td>
						<td>Cache cube</td>
					</tr>
				</table>
				<li>Battles</li>
				<table className="demontable">
					<tr>
						<th>Forced Battles</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
					</tr>
					<tr>
						<td>Phantom</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>Kodama</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</ul>
		</>
	);
}
