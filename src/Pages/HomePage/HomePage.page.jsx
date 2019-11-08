import React from "react";
import {
	Grid,
	Image,
	Segment,
	Icon,
	Divider
} from "semantic-ui-react";

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
					<Segment tertiary raised textAlign="center">
						<h1 className="font1">Sam Thoyre</h1>
						<h2 className="font2">
							Web Developer Extraordinaire
						</h2>
						<Divider section/>
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
