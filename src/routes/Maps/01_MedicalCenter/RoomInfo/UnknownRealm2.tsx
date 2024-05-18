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
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Forced Battles</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
					</tr>
					<tr className="combined">
						<td>Kodama</td>
						<td>3</td>
						<td>20</td>
						<td>24</td>
					</tr>
					<tr className="combined">
						<td>Will O&apos; Wisp</td>
						<td>1</td>
						<td>10</td>
						<td>18</td>
					</tr>

					<tr>
						<td>2x Kodama</td>
						<td>3</td>
						<td>20</td>
						<td>24</td>
					</tr>
				</table>
			</ul>
		</>
	);
}
