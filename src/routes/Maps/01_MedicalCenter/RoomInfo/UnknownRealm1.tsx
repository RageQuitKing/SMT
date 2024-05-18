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
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Forced Battles</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
					</tr>
					<tr>
						<td>2x Will O&apos; Wisp</td>
						<td>1</td>
						<td>10</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Preta</td>
						<td>4</td>
						<td>30</td>
						<td>24</td>
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
										<table>
											<tr>
												<td>
													By my master&apos;s orders, I&apos;ll treat your
													wounds.
												</td>
											</tr>
											<tr>
												<td>&gt;You and your party were healed</td>
											</tr>
										</table>
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
