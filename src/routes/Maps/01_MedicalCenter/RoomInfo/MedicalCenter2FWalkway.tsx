import React from "react";
import "../MedicalCenter.css";
export default function MedicalCenter2FWalkway() {
	return (
		<>
			<h1>Walkway</h1>
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
						<td>Pixie</td>
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
													Ooh I&apos;ve never seen a demon quite like
													you...
												</td>
											</tr>
											<tr>
												<td>Hey, are you looking for something?</td>
											</tr>
											<p>&gt;Kinda, yeah.</p>
											<tr>
												<td>
													Hey, about that thing you&apos;looking for...
												</td>
											</tr>
											<tr>
												<td>
													I&apos;ll help you if you want! In fact,
													I&apos;ll even be your demon ally!
												</td>
											</tr>
											<tr>
												<td>You wanna know what I&apos;m looking for?</td>
											</tr>
											<tr>
												<td>A demon who can take me to Yoyogi Park.</td>
											</tr>
											<tr>
												<td>
													You look kinda flabby and weak, but i&apos;ll
													let that slide.
												</td>
											</tr>
											<tr>
												<td>Whaddya say? Should we join up?</td>
											</tr>
											<p>&gt;Kinda, yeah.</p>
											<tr>
												<td>All right then, let&apos;s get outta here!</td>
											</tr>
											<tr>
												<td>
													If we have the pass-thingie, we can get through
													that door to the annex.
												</td>
											</tr>
											<tr>
												<td>I saw some Pretas carrying it.</td>
											</tr>
											<tr>
												<td>
													I&apos;m Pixie the Fairy. I&apos;m sure
													we&apos;ll be the best of friends.
												</td>
											</tr>
											<tr className="event">
												<td>&gt;Pixie joined your party!</td>
											</tr>
											<p>&gt;Not Really.</p>
											<tr>
												<td></td>
											</tr>
											<tr>
												<td></td>
											</tr>
											<tr>
												<td></td>
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
