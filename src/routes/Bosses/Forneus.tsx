import React from "react";
import Page from "../../page";
import "./bosses.css";
export default function Forneus() {
	return (
		<Page>
			<div className="pagebackground" />
			<div className="bosspanel">
				<p className="bossname">Forneus</p>
				<div>
					<table>
						<tr>
							<td className="statnames">LV:</td>
							<td>8</td>
						</tr>
						<tr>
							<td className="statnames">HP:</td>
							<td className="statnumbers">500</td>
						</tr>
						<tr>
							<td className="statnames">MP:</td>
							<td className="statnumbers">300</td>
						</tr>
						<tr>
							<td className="statnames">Turns:</td>
							<td>1</td>
						</tr>
					</table>
				</div>
				<table className="affinities">
					<tr>
						<td>Physical</td>
						<td>Fire</td>
						<td>Ice</td>
						<td>Force</td>
						<td>Elec</td>
						<td>Expel</td>
						<td>Death</td>
						<td>Mind</td>
						<td>Nerve</td>
					</tr>
					<tr>
						<td>-</td>
						<td>-</td>
						<td className="drain">DRN</td>
						<td>-</td>
						<td className="weak">WK</td>
						<td>-</td>
						<td className="void">VOID</td>
						<td>-</td>
						<td>-</td>
					</tr>
				</table>
				<table>
					<tr>
						<td className="statnames">ST</td>
						<td className="statnumbers">9</td>
						<td className="statbars">█████████</td>
					</tr>
					<tr>
						<td className="statnames">MA</td>
						<td className="statnumbers">9</td>
						<td className="statbars">█████████</td>
					</tr>
					<tr>
						<td className="statnames">VI</td>
						<td className="statnumbers">6</td>
						<td className="statbars">██████</td>
					</tr>
					<tr>
						<td className="statnames">AG</td>
						<td className="statnumbers">2</td>
						<td className="statbars">██</td>
					</tr>
					<tr>
						<td className="statnames">LU</td>
						<td className="statnumbers">2</td>
						<td className="statbars">██</td>
					</tr>
				</table>
				<div>
					<p className="skillsname">Skills</p>
					<table className="skills">
						<tr>
							<td>Bufu</td>
							<td>Mabufu</td>
							<td>Icy Death</td>
						</tr>
					</table>
				</div>
			</div>
		</Page>
	);
}
