import React from "react";
import "../MedicalCenter.css";
export default function Annex1FHallwayWest() {
	return (
		<>
			<h1 className="roomname">Annex 1F</h1>
			<ul>
				<li>Items</li>
				<table className="itemtable">
					<tr>
						<th className="items">Items</th>
						<th className="qty">Qty.</th>
						<th>From</th>
					</tr>
					<tr>
						<td>750 Macca</td>
						<td></td>
						<td>
							Obtained from spirit after defeating Forneus, if talked to before
							fighting.
						</td>
					</tr>
				</table>
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Demon</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
						<th>Quirks</th>
					</tr>
					<tr>
						<td>Hua Po</td>
						<td>6</td>
						<td>40</td>
						<td>20</td>
						<td>None</td>
					</tr>
					<tr>
						<td>Shikigami</td>
						<td>6</td>
						<td>50</td>
						<td>30</td>
						<td>None</td>
					</tr>
				</table>
				<li>Spirits</li>
				<table className="spirittable">
					<tr>
						<th>Spirit</th>
						<th>Dialogue</th>
					</tr>
					<tr>
						<td>Gambler</td>
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
								<tr>
									<td>After Forneus is defeated</td>
									<td>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Qui non consequuntur praesentium voluptate. Cum quis
										possimus at provident laudantium est.
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
