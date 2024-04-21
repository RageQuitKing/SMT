import React from "react";
import "./MedicalCenter.css";
import F1 from "../assets/MedicalCenter/F1.svg";
import B1 from "../assets/MedicalCenter/B1.svg";
import F2 from "../assets/MedicalCenter/F2.svg";
import Page from "../page";
export default function MedicalCenter() {
	return (
		<Page>
			<p>Medical Center</p>
			<img src={B1} alt="Medical Center B1" className="medical-center" />
			<img src={F1} alt="Medical Center F1" className="medical-center" />
			<img src={F2} alt="Medical Center F2" className="medical-center" />
			<table>
				<tr className="">
					<th>Demon</th>
					<th>Level</th>
					<th>HP</th>
					<th>MP</th>
				</tr>
				<tr className="area1">
					<td>Will O’ Wisp</td>
					<td>1</td>
					<td>30</td>
					<td>18</td>
				</tr>
				<tr className="area2">
					<td>Kodama</td>
					<td>3</td>
					<td>42</td>
					<td>21</td>
				</tr>
				<tr className="area3">
					<td>Preta</td>
					<td>4</td>
					<td>54</td>
					<td>24</td>
				</tr>
				<tr className="area4">
					<td>Shikigami</td>
					<td>4</td>
					<td>48</td>
					<td>27</td>
				</tr>
				<tr className="area5">
					<td>Hua Po</td>
					<td>5</td>
					<td>60</td>
					<td>30</td>
				</tr>
				<tr>
					<th>Boss</th>
					<th>Level</th>
					<th>HP</th>
					<th>MP</th>
				</tr>
				<tr className="areaboss">
					<td>Forneus</td>
					<td>8</td>
					<td>500</td>
					<td>200</td>
				</tr>
			</table>
		</Page>
	);
}
