import React from "react";
import { Divider } from "semantic-ui-react";

import { Title } from "../../Components/Title/Title";
import TechnicalSkills from "./Skills.Components/Skills.TechnicalSkills";
import SoftSkills from "./Skills.Components/Skills.SoftSkills";

export default function Skills() {
	return (
		<div className="container">
			<Title
				title="Technical Skills"
				color="blue"
				inverted="true"
			/>
			<Divider section />
			<TechnicalSkills />
			<Divider section />
			<Title
				title="Soft Skills"
				color="blue"
				inverted="true"
			/>
			<Divider section />
			<SoftSkills />
		</div>
	);
}
