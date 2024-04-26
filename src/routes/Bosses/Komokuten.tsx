import React from "react";
import Page from "../../page";
import "./bosses.css";
export default function Komokuten() {
	return (
		<Page>
			<div className="pagebackground" />
			<div className="bosspanel">
				<p className="bossname">Komokuten</p>
				<div>
					<table>
						<tr>
							<td className="statnames">LV:</td>
							<td>99</td>
						</tr>
						<tr>
							<td className="statnames">HP:</td>
							<td>20,000</td>
						</tr>
						<tr>
							<td className="statnames">MP:</td>
							<td>10,000</td>
						</tr>
						<tr>
							<td className="statnames">Turns:</td>
							<td>2</td>
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
						<td>-</td>
						<td className="repel">RPL</td>
						<td className="weak">WK</td>
						<td className="void">VOID</td>
						<td className="void">VOID</td>
						<td className="void">VOID</td>
						<td className="void">VOID</td>
					</tr>
				</table>
				<table className="stats">
					<tr>
						<td className="statnames">ST</td>
						<td className="statnumbers">40</td>
						<td className="statbars">████████████████████████████████████████</td>
					</tr>
					<tr>
						<td className="statnames">MA</td>
						<td className="statnumbers">40</td>
						<td className="statbars">████████████████████████████████████████</td>
					</tr>
					<tr>
						<td className="statnames">VI</td>
						<td className="statnumbers">40</td>
						<td className="statbars">████████████████████████████████████████</td>
					</tr>
					<tr>
						<td className="statnames">AG</td>
						<td className="statnumbers">40</td>
						<td className="statbars">████████████████████████████████████████</td>
					</tr>
					<tr>
						<td className="statnames">LU</td>
						<td className="statnumbers">40</td>
						<td className="statbars">████████████████████████████████████████</td>
					</tr>
				</table>
				<div>
					<p className="skillsname">Skills</p>
					<table className="skills">
						<tr>
							<td>Dragon Eye</td>
							<td>Zandyne</td>
							<td>Mazandyne</td>
						</tr>
						<tr>
							<td>Wind Cutter</td>
							<td>Megidolaon</td>
							<td>Makakaja</td>
						</tr>
						<tr>
							<td>Rakukaja</td>
							<td>Rakunda</td>
							<td>Focus</td>
						</tr>
						<tr>
							<td>Berserk</td>
							<td>Deathbound</td>
						</tr>
					</table>
				</div>
			</div>
		</Page>
	);
}
