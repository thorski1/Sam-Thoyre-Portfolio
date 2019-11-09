import React from "react";
import { Divider } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

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
			<LazyLoad offset={100} height={200} once>
				<TechnicalSkills />
				<Divider section />
				<Title
					title="Soft Skills"
					color="blue"
					inverted="true"
				/>
				<Divider section />
				<SoftSkills />
			</LazyLoad>
		</div>
	);
}
