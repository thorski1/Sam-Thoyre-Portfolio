import React from "react";
import { technicalSkills, softSkills } from "./skills";
import {
	Progress,
	Card,
	Feed,
	Segment,
	Divider
} from "semantic-ui-react";

export default function Skills() {
	return (
		<div className="container">
			<Segment
				inverted
				color="blue"
				tertiary
				textAlign="center"
			>
				<h1 className="font3">Technical Skills</h1>
			</Segment>
			<Divider section />
			<Card.Group centered>
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
			<Divider section />
			<Segment
				inverted
				color="blue"
				tertiary
				textAlign="center"
			>
				<h1 className="font3">Soft Skills</h1>{" "}
			</Segment>
			<Divider section />
			<Card.Group centered>
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
