import React from "react";
import {
	Grid,
	Image,
	List,
	Icon,
	Container,
	Header,
	Segment
} from "semantic-ui-react";
import { contactInfo } from "./Contact";

const Contact = () => (
	<Container>
		<Grid stackable columns={2}>
			<Grid.Row stretched>
				<Grid.Column>
					<Segment
						secondary
						stacked
						color="blue"
						textAlign="center"
					>
						<Image
							verticalAlign="middle"
							rounded
							src="/assets/SharkNMe.jpg"
						/>
						<Header as="h3">
							Me and my little baby shark hanging out
						</Header>
					</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment
						raised
						inverted
						color="blue"
						tertiary
						textAlign="center"
					>
						<h1 className="font3">Get in touch with me!</h1>
						<Segment>
							<Header as="h3">
								I am looking for new opportunities! If you
								would like to get in touch with me, I would
								love to chat! Please feel free to reach out
								to me using any of the methods listed below
								and I'll be sure to get right back to you!
							</Header>
						</Segment>
					</Segment>
					<Segment raised color="orange">
						<List animated verticalAlign="middle">
							{contactInfo.map(contact => (
								<List.Item
									as={contact.link}
									href={contact.address}
								>
									<Icon
										color={contact.color}
										name={contact.iconName}
										size="huge"
									/>
									<List.Content>
										<List.Header as="h2">
											{contact.info}
										</List.Header>
									</List.Content>
								</List.Item>
							))}
						</List>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default Contact;
