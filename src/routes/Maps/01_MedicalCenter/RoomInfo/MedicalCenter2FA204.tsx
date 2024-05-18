import React from "react";
import "../MedicalCenter.css";
export default function MedicalCenter2FA204() {
	return (
		<>
			<h1>Room A204</h1>
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
												<td>
													There&apos;re some demons called Pretas making a
													fuss about wanting Magatsuhi
												</td>
											</tr>
											<tr>
												<td>
													Magatsuhi is the source of demonic powers... I
													think. I really don&apos;t know how it works.
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
