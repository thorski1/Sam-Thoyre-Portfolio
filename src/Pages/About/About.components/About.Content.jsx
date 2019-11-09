import React from "react";
import {
	Grid,
	Image,
	Segment,
	Header
} from "semantic-ui-react";
import { rows } from "../About";

export default function Content() {
	return (
		<React.Fragment>
			{rows.map((row, i) =>
				i % 2 === 0 || i === 0 ? (
					<Grid.Row stretched>
						<Grid.Column width={11}>
							<Segment secondary raised color={row.color}>
								<Header textAlign="center" as="h4">
									{row.paragraph}
								</Header>
							</Segment>
						</Grid.Column>
						<Grid.Column width={5}>
							<Segment piled color={row.color}>
								<Image rounded src={row.image} />
							</Segment>
						</Grid.Column>
					</Grid.Row>
				) : (
					<Grid.Row stretched>
						<Grid.Column width={5}>
							<Segment piled color={row.color}>
								<Image rounded src={row.image} />
							</Segment>
						</Grid.Column>
						<Grid.Column width={9} floated="right">
							<Segment secondary raised color={row.color}>
								<Header as="h4" textAlign="center">
									{row.paragraph}
								</Header>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				)
			)}
		</React.Fragment>
	);
}
