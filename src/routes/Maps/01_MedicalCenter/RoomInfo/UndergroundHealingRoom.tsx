import React from "react";
import "../MedicalCenter.css";
export default function UndergroundFacilityHealingRoom() {
	return (
		<>
			<h1>Healing Room</h1>
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
												<td>What would a demon like you want with me?</td>
											</tr>
											<tr>
												<td>
													I&apos;ll heal your wounds, so please don&apos;t
													decide to eat me...
												</td>
											</tr>
											<tr>
												<td>&gt;......</td>
											</tr>
											<tr>
												<td>&gt; The soul healed you.</td>
											</tr>

											<tr>
												<td>
													I&apos;ll heal your wounds anytime, so
													don&apos;t eat me, please.
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
