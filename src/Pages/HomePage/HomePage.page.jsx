import React from "react";
import {
	Grid,
	Image,
	Segment,
	Divider
} from "semantic-ui-react";

import { Intro } from "./HomePage.Components/HomePage.Intro";
import { Projects } from "./HomePage.Components/HomePage.Projects";
import { Title } from "../../Components/Title/Title";


const HomePage = () => (
	<Grid stackable columns={3}>
		<Grid.Row centered>
			<Grid.Column width={10}>
				<Segment raised inverted color="blue" tertiary>
					<Image
						centered
						size="huge"
						rounded
						src="/assets/homepagepic.jpg"
					/>
					<Divider section />
					<Intro />
					<Divider section />
					<Title title="Notable Projects" />
					<Divider section />
					<Projects />
				</Segment>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default HomePage;
