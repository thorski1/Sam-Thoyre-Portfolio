import React from "react";
import {
	Grid,
	Image,
	Segment,
	Header
} from "semantic-ui-react";

export default function Intro() {
    return (
			<Grid.Row stretched>
				<Grid.Column width={6}>
					<Segment color="blue" piled>
						<Image rounded src="assets/FamilyPic.jpg" />
					</Segment>
				</Grid.Column>
				<Grid.Column width={10}>
					<Segment
						raised
						textAlign="center"
						inverted
						color="blue"
						tertiary
					>
						<h1 className="font3">About Me!</h1>{" "}
						<Segment secondary>
							<Header as="h3">
								Hello! My name is Sam Thoyre and I love to
								code! I've done a lot of different things in
								my 32 years of life, but nothing has
								captured my attention as much as my journey
								into the world of coding has. So far, I've
								focused my efforts on JavaScript and web
								development, specifically, but I have big
								plans for my career in this field! After
								mastering JavaScript and becoming a front
								end wizard, I would love to dive into the
								backend and explore some other languages,
								like Python, Ruby, C++, or Java. I would
								also be interested in learning more about
								machine learning, artificial intelligence,
								and the internet of things. There's so much
								to explore!
							</Header>
						</Segment>
					</Segment>
				</Grid.Column>
			</Grid.Row>
		);
}