import React from "react";
import {
	Grid,
	Container,
	Image,
	Segment,
	Header
} from "semantic-ui-react";
import {rows} from './About'

export default function About() {
	return (
		<Container>
			<Grid stackable>
				<Grid.Row stretched>
					<Grid.Column width={6}>
						<Segment piled>
							<Image rounded src="assets/FamilyPic.jpg" />
						</Segment>
					</Grid.Column>
					<Grid.Column width={10}>
						<Segment raised textAlign="center" color="blue">
							<Header as="h1">About Me!</Header>
							<Segment color="grey">
								<Header as="h3">
									Hello! My name is Sam Thoyre and I love to
									code! I've done a lot of different things
									in my 32 years of life, but nothing has
									captured my attention as much as my
									journey into the world of coding has. So
									far, I've focused my efforts on JavaScript
									and web development, specifically, but I
									have big plans for my career in this
									field! After mastering JavaScript and
									becoming a front end wizard, I would love
									to dive into the backend and explore some
									other languages, like Python, Ruby, C++,
									or Java. I would also be interested in
									learning more about machine learning,
									artificial intelligence, and the internet
									of things. There's so much to explore!
								</Header>
							</Segment>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				{rows.map((row, i) =>
					i % 2 === 0 || i === 0 ? (
						<Grid.Row stretched>
							<Grid.Column width={11}>
								<Segment raised color={row.color}>
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
								<Segment raised color={row.color}>
									<Header as="h4" textAlign="center">
										{row.paragraph}
									</Header>
								</Segment>
							</Grid.Column>
						</Grid.Row>
					)
				)}
			</Grid>
		</Container>
	);
}

