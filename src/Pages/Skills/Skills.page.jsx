import React from "react";
import "./Skills.css";
import { technicalSkills, softSkills } from "./skills";
import {
	Progress,
	Card,
	Feed,
	Header
} from "semantic-ui-react";

export default function Skills() {
	return (
		<div className="container">
			<Header as="h1">Technical Skills</Header>
			<Card.Group>
				{technicalSkills.map(skill => (
					<Card color={skill.color}>
						<Card.Content>
							<Card.Header>{skill.skill}</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image={skill.image} />
									<Feed.Content>
										<Progress
											value={skill.value}
											total="100"
											progress="percent"
											color={skill.color}
										/>
									</Feed.Content>
								</Feed.Event>
							</Feed>
						</Card.Content>
					</Card>
				))}
			</Card.Group>
			<Header as="h1">Soft Skills</Header>
			<Card.Group>
				{softSkills.map(skill => (
					<Card color={skill.color}>
						<Card.Content>
							<Card.Header>{skill.skill}</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image={skill.image} />
									<Feed.Content>
										<Progress
											value={skill.value}
											total="100"
											progress="percent"
											color={skill.color}
										/>
									</Feed.Content>
								</Feed.Event>
							</Feed>
						</Card.Content>
					</Card>
				))}
			</Card.Group>
		</div>
	);
}
