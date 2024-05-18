import React from "react";
import "../MedicalCenter.css";
export default function MedicalCenter2FA201() {
	return (
		<>
			<h1>Room A201</h1>
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
						<td>1</td>
						<td>Cache cube</td>
					</tr>
				</table>
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Demon</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
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
						<td>Soul</td>
						<td className="whitebackground">
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
												<td>I saw some humans at the annex.</td>
											</tr>
											<tr>
												<td>
													They&apos;re probably dead by now. Gobbled up by
													demons-flesh, bones, and all.
												</td>
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
