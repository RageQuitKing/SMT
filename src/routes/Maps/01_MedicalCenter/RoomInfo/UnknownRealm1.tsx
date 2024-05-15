import React from "react";
import "../MedicalCenter.css";
export default function UnknownRealm1() {
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
						<td>Medicine</td>
						<td>2</td>
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
				<li>Spirits</li>
				<table className="spirittable">
					<tr>
						<th>Spirit</th>
						<th>Dialogue</th>
					</tr>
					<tr>
						<td>Doctor</td>
						<td>
							<table className="spiritdialogue">
								<tr>
									<th className="thirtyonep">Progression</th>
									<th>Dialogue</th>
								</tr>
								<tr>
									<td>First Encounter</td>
									<td>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Obcaecati, dolor.
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</ul>
		</>
	);
}
