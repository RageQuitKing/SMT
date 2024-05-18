import React from "react";
import "../MedicalCenter.css";
export default function UndergroundFacilityHallwayEast() {
	return (
		<>
			<h1>Underground Facility</h1>
			<ul>
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Demons</th>
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
												<td>Who Are You?</td>
											</tr>
											<tr>
												<td>Yet another demon after Magatsuhi?</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
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
												<td>What&apos;re you staring at me for?</td>
											</tr>
											<tr>
												<td>
													Am I that peculiar? You&apos;re the demon here.
												</td>
											</tr>
											<tr>
												<td>
													Well, if you&apos;re going to walk around the
													hospital, let me warn you...
												</td>
											</tr>
											<tr>
												<td>
													You&apos;ve chosen a harsh path. From this point
													forward, enemies will hound you wherever you set
													foot.
												</td>
											</tr>
											<tr>
												<td>Never forget your fate.</td>
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
