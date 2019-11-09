import React from "react";
import { Card } from "semantic-ui-react";

import { Buttons } from "./Projects.Buttons";

import { projects } from "../Projects";

export default function Cards() {
    return (
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
		);
}