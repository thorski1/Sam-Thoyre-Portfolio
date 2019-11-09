import React from "react";
import { Divider } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

import { Title } from "../../Components/Title/Title";
import Cards from "./Projects.Components/Projects.ProjectCards";

export default function Projects() {
	return (
		<div className="container">
			<Title
				title="Projects"
				color="blue"
				inverted="true"
			/>
			<Divider section />
			<LazyLoad offset={100} height={200} once>
				<Cards />
			</LazyLoad>
		</div>
	);
}
