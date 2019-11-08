import React from "react";

import { Card, Segment, Divider } from "semantic-ui-react";
import { Buttons } from "./Projects.Buttons";
import { projects } from "./Projects";

export default function Projects() {
	return (
		<div className="container">
			<Segment
				inverted
				color="blue"
				tertiary
				textAlign="center"
			>
				<h1 className="font3">Projects</h1>
			</Segment>
			<Divider section />
			<Card.Group centered>
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
