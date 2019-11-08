import React from "react";

import { Card } from "semantic-ui-react";
import "./Projects.css";
import { Buttons } from "./Projects.Buttons";
import { projects } from "./Projects";

export default function Projects() {
	return (
		<div className="container">
			<Card.Group>
				{projects.map(project => (
					<Card
						color={project.color}
						href={project.siteURL}
						image={project.image}
						header={project.name}
						description={project.description}
						extra={
							<Buttons
								github={project.githubURL}
								site={project.siteURL}
								color={project.color}
							/>
						}
					/>
				))}
			</Card.Group>
		</div>
	);
}
