import React from "react";
import {
	Grid,
	Image,
	Segment,
	Header,
	Icon
} from "semantic-ui-react";

const HomePage = () => (
	<Grid stackable columns={3}>
		<Grid.Row centered>
			<Grid.Column width={10}>
				<Segment raised color="blue">
					<Image
						centered
						size="large"
						rounded
						src="/assets/profilePic.jpg"
					/>
					<Segment raised color="blue" textAlign="center">
						<Header as="h1">Sam Thoyre</Header>
						<Header as="h3">
							Web Developer Extraordinaire
						</Header>
						<Icon color="yellow" name="js" size="huge" />
						<Icon color="blue" name="react" size="huge" />
						<Icon
							color="green"
							name="node js"
							size="huge"
						/>
						<Icon color="blue" name="css3" size="huge" />
						<Icon color="red" name="html5" size="huge" />
						<Icon color="pink" name="sass" size="huge" />
						<Icon color="red" name="git" size="huge" />
						<Icon color="green" name="vuejs" size="huge" />
					</Segment>
				</Segment>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default HomePage;
