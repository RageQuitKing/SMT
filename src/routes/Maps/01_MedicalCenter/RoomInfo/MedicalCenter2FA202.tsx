import React from "react";
import "../MedicalCenter.css";
export default function MedicalCenter2FA202() {
	return (
		<>
			<h1>Room A202</h1>
			<ul>
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
												<td>
													You know that security system at the passageway
													ahead?
												</td>
											</tr>
											<tr>
												<td>You need an Annex Gate Pass to get through.</td>
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
