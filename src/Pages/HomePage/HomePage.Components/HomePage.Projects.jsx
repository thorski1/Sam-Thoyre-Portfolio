import React from "react";
import {
	Segment,
	Card
} from "semantic-ui-react";
import { Buttons } from "../../Projects/Projects.Components/Projects.Buttons";
import { projects } from "../HomePage.Projects";

export const Projects = () => (
	<Segment secondary>
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
	</Segment>
);
