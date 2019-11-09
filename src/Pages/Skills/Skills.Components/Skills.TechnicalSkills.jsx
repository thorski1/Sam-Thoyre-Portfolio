import React from "react";
import { Progress, Card, Feed } from "semantic-ui-react";

import { technicalSkills } from "../skills";

export default function TechnicalSkills() {
	return (
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
										active
									/>
								</Feed.Content>
							</Feed.Event>
						</Feed>
					</Card.Content>
				</Card>
			))}
		</Card.Group>
	);
}
