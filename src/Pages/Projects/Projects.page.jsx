import React from "react";
import { Divider } from "semantic-ui-react";

import { Title } from "../../Components/Title/Title";
import Cards from "./Projects.Components/Projects.ProjectCards";

export default function Projects() {
	return (
		<div className="container">
			<Title title="Projects" color="blue" inverted="true" />
			<Divider section />
			<Cards />
		</div>
	);
}
