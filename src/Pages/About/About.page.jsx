import React from "react";
import {
	Grid,
	Container,
	Divider
} from "semantic-ui-react";
import {Intro} from './About.components/About.Intro'
import Content from './About.components/About.Content'


export default function About() {
	return (
		<Container>
			<Grid stackable>

				<Intro />
				<Divider section />
				<Content />
			</Grid>
		</Container>
	);
}

