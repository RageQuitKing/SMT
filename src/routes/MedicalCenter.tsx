import React from "react";
import "./MedicalCenter.css";
// import F1 from "../assets/MedicalCenter/F1.svg";
// import B1 from "../assets/MedicalCenter/B1.svg";
// import F2 from "../assets/MedicalCenter/F2.svg";
import Page from "../page";
export default function MedicalCenter() {
	return (
		<Page>
			<p>Medical Center</p>
			{/* <img src={B1} alt="Medical Center B1" className="medical-center" />
			<img src={F1} alt="Medical Center F1" className="medical-center" />
			<img src={F2} alt="Medical Center F2" className="medical-center" /> */}
			<svg className="victor">
				<path d="M 416 113 l 20 0 l 0 20 l -20 0 z" className="elevator1"></path>
				<path
					d="M 416 113 m 7 6 l 6 0 l 0 1 l -5 0 l 0 2 l 4 0 l 0 1 l -4 0 l 0 3 l 5 0 l 0 1 l -6 0 z"
					className="elevator2"
				></path>
				<path
					d="
 M 401 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z"
					className="area"
				></path>
				<path
					d=" M 401 165 l 0 75 l -15 0 l 0 -15 l -37 0 l 0 -15 l 37 0 l 0 -45 z"
					className="area"
				></path>
				<path d="M 247 210 l 102 0 l 0 15 l -102 0 z" className="area"></path>
				<path d="M 451 165 l 0 75 l 15 0 l 0 -75 z" className="area"></path>
				<path d="M 306 120 l 30 0 l 0 30 l -30 0 z" className="area"></path>
				<path d="M 306 105 l 30 0 l 0 -30 l -30 0 z" className="area"></path>
				<path d="M 516 105 l 30 0 l 0 -30 l -30 0 z" className="area"></path>
				<path d=" M 516 120 l 30 0 l 0 30 l -30 0 z" className="area"></path>
				<path d="M 499 60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z" className="area"></path>
				<path
					d="M 334 60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z"
					stroke="none"
					className="area"
				></path>
				<path
					d="M 149 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z"
					className="area"
				></path>
				<path d="M 247 60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z" className="area"></path>
				<path d="M 84 150 l -30 0 l 0 -30 l 30 0 z" className="area"></path>
				<path d="M 84 105 l -30 0 l 0 -30 l 30 0 z" className="area"></path>
				<path d="M 264 75 l 30 0 l 0 30 l -30 0 z" className="area"></path>
				<path d="M 264 120 l 30 0 l 0 30 l -30 0 z" className="area"></path>
				<path d="M 149 165 l 0 75 l -15 0 l 0 -75 z" className="area"></path>
				<path
					d="M 199 165 l 15 0 l 0 45 l -15 0 l 47 0 l 0 15 l -33 0 l 0 15 l -15 0 z"
					stroke="none"
					className="area"
				></path>
				<path
					d="M 416 113 
 m 83 -71 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0
 m -175 -6 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0
 m -97 -6 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0"
					className="stairs"
				></path>
				<path
					d="M 416 113
 m 4.5 23.5 l 11 0"
					className="singledoors"
				></path>
				<path
					d="	
 M 338 60 l 11 0
 M 503 60 l 11 0
 M 251 60 l 11 0
 M 84 85 l 0 11
 M 264 85 l 0 11
 M 336 85 l 0 11
 M 516 85 l 0 11
 m -432 33 l 0 11
 m 180 -11 l 0 11
 m 72 -11 l 0 11
 m 180 -11 l 0 11
 m -380 25 l 11 0
 m 54 0 l 11 0
 m 176 0 l 11 0
 m 54 0 l 11 0
 m -217 47 l 0 11
 m 102 -11 l 0 11"
					className="singledoors"
				></path>
				<path
					d="M 416 113 
 m -15 22 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z
 m 0 30 l 0 75 l -15 0 l 0 -15 l -172 0 l 0 15 l -15 0 l 0 -75 l 15 0 l 0 45 l 172 0 l 0 -45 z
 m 50 0 l 0 75 l 15 0 l 0 -75 z
 m -302 -30 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -180 0 l 0 -105 l 15 0 l 0 90 l 50 0 z
 m 0 30 l 0 75 l -15 0 l 0 -75 z
 m -65 -15 l -30 0 l 0 -30 l 30 0 z
 m -30 -45 l 0 -30 l 30 0 l 0 30 z
 m 210 -30 l 30 0 l 0 30 l -30 0 z
 m 0 45 l 30 0 l 0 30 l -30 0 z
 m 42 0 l 30 0 l 0 30 l -30 0 z
 m 0 -15 l 30 0 l 0 -30 l -30 0 z
 m 210 0 l 30 0 l 0 -30 l -30 0 z
 m 0 15 l 30 0 l 0 30 l -30 0 z
 m -17 -60 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z
 m -165 0 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z
 m -87 0 l 20 0 l 0 -10 l -10 0 l 0 -10 l -10 0 z
 m 0 150 l 0 15 m 102 0 l 0 -15"
					className="perimeter"
				></path>
			</svg>
			<svg xmlns="http://www.w3.org/2001/svg" className="vector">
				<style></style>
				<path
					d="M 401 135 l 50 0 l 0 15 l 15 0 l 0 15 l -15 0 l 0 90 l -15 0 l 0 -30 l -35 0 l 0 -60 l -16 0 l 0 -15 l 16 0 z  "
					className="area"
				></path>
				<path d="M335.5 60 l 15 0 l 0 90 l 35 0 l 0 15 l -50 0 z" className="area"></path>
				<path d="M 500.5 60 l 15 0 l 0 105 l -50 0 l 0 -15 l 35 0" className="area"></path>
				<path
					d="M 333.5 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z"
					className="area"
				></path>
				<path
					d="M 498.5 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z"
					className="area"
				></path>
				<path
					d="M 84 60 l 15 0 l 0 90 l 35 0 l 0 15 l -80 0 l 0 -15 l 30 0"
					className="area"
				></path>
				<path
					d="M 247.5 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z "
					className="area"
				></path>
				<path d="M 294 147 l 20 0 l 0 10 l -10 0 l 0 10 l -10 0 z" className="area"></path>
				<path d="M 54 147 l -10 0 l 0 10 l -10 0 l 0 10 l 20 0 z" className="area"></path>
				<path
					d="M 149 135 l 50 0 l 0 15 l 15 0 l 0 15 -15 0 l 0 60 l -35 0 l 0 30 l -15 0 l 0 -90 l -15 0 l 0 -15 l 15 0 z"
					className="area"
				></path>
				<path
					d="M 214 150 l 35 0 l 0 -90 l 15 0 l 0 90 l 30 0 l 0 15 l -80 0 z "
					className="area"
				></path>
				<path
					d="M 149 80 l 50 0 l 0 -25 l -15 0 l 0 -20 l 25 0 l 0 -15 l -70 0 l 0 15 l 25 0 l 0 20 l -15 0 z"
					className="area"
				></path>
				<path d="M 54 75 l 30 0 l 0 30 l -30 0 z" className="area"></path>
				<path
					d="M 416 113 l 20 0 l 0 20 l -20 0 z"
					fill="#0e1110"
					stroke="#3e311e"
					className="strokewidth1"
				></path>
				<path
					d="M 416 113 m 7 6 l 6 0 l 0 1 l -5 0 l 0 2 l 4 0 l 0 1 l -4 0 l 0 3 l 5 0 l 0 1 l -6 0 z"
					fill="#f5efae"
					stroke="#f5efae"
					className="strokewidth01"
				></path>
				<path d="M 81.5 39 l 20 0 l 0 20 l -20 0 z" className="terminal1"></path>
				<path
					d="M 81.5 39 m 10 3 l 3 1.5 l 0 9 l 1 1 l 0 3 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -2.5 l -1.75 0 l 0 2.5 l -1.5 0 l 0 -3 l 1 -1 l 0 -9 z"
					className="terminal2"
				></path>
				<path d="M 59 80 l 20 0 l 0 20 l -20 0 z" className="fountain"></path>
				<ellipse cx="69" cy="90" rx="8" ry="6" fill="#c2e8e9"></ellipse>
				<ellipse cx="69" cy="90" rx="7" ry="5" fill="#0e1110"></ellipse>
				<ellipse cx="69" cy="90" rx="6" ry="4.6" fill="#c2e8e9"></ellipse>
				<ellipse cx="69" cy="89" rx="4.6" ry="3.6" fill="#0e1110"></ellipse>
				<path
					d="M 154 65 l 8 0 l -4 8 l 4 0 l 0 2 l -8 0 l 0 -2 l 4 0 z"
					className="arrow"
				></path>
				<path
					d=" M 37 157 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 M 306 147 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 m 2 -10 l 0 10 M 257 40 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 M 344 40 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 M 509 40 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0 m -10 2 l 10 0"
					className="stairs"
				></path>
				<path
					d=" M 420.5 136.6 l 11 0 M 151 253.4 l 11 0 M 86 61.6 l 11 0"
					className="singledoors"
				></path>
				<path
					d="M 251 60 l 11 0 M 338 60 l 11 0 M 503 60 l 11 0 M 84 84 l 0 11 M 54 152 l 0 11 M 134 152 l 0 11 M 214 152 l 0 11 M 294 152 l 0 11 M 385 152 l 0 11 M 465 152 l 0 11"
					className="doubledoors"
				></path>
				<path
					d=" M 401 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 105 l -65 0 l 0 90 l -15 0 l 0 -30 l -35 0 l 0 -60 l -65 0 l 0 -105 l 15 0 l 0 90 l 50 0 z M 149 135 l 50 0 l 0 15 l 50 0 l 0 -90 l 15 0 l 0 90 l 30 0 l 0 15 l -95 0 l 0 60 l -35 0 l 0 30 l -15 0 l 0 -90 l -95 0 l 0 -15 l 30 0 l 0 -90 l 15 0 l 0 90 l 50 0 z M 247 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z M 333.8 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z M 499 60 l 20 0 l 0 -30 l -20 0 l 0 10 l 10 0 l 0 10 l -10 0 z M 294 147 l 20 0 l 0 10 l -10 0 l 0 10 l -10 0 z M 54 147 l -10 0 l 0 10 l -10 0 l 0 10 l 20 0 z M 134 150 l 0 15 M 214 150 l 0 15 M 385 150 l 0 15 M 465 150 l 0 15 M 149 80 l 50 0 l 0 -25 l -15 0 l 0 -20 l 25 0 l 0 -15 l -70 0 l 0 15 l 25 0 l 0 20 l -15 0 z M 54 75 l 30 0 l 0 30 l -30 0 z"
					className="perimeter"
				></path>
				<text x="147" y="264" className="text">
					EXIT
				</text>
			</svg>
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
