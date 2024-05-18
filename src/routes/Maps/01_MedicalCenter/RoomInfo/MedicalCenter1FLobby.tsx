import React from "react";
import "../MedicalCenter.css";
export default function MedicalCenter1FLobby() {
	return (
		<>
			<h1>Medical Center Lobby</h1>
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
												<td>Who?</td>
											</tr>
											<tr>
												<td>Chiaki? Isamu?</td>
											</tr>
											<tr>
												<td>...Yeah, never heard of &apos;em</td>
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
												<td>The exit is just as you perceive it.</td>
											</tr>
											<tr>
												<td>Were you trying to leave the hospital?</td>
											</tr>
											<p>&gt;Yes</p>
											<tr>
												<td>Then how about next door?</td>
											</tr>
											<tr>
												<td>
													This is the main building, but theres an annex.
													Maybe you can use that entrance.
												</td>
											</tr>
											<p>&gt;No</p>
											<tr>
												<td>...I see.</td>
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
