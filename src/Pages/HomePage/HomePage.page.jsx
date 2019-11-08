import React from "react";
import {
	Grid,
	Image,
	Segment,
	Icon,
	Divider,
	Card
} from "semantic-ui-react";
import { Buttons } from "../Projects/Projects.Buttons";
import { projects } from "./HomePage.Projects";

const styles = {
	fontSize: "50px"
};

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
						<Divider section />
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
					<Divider section />
					<Segment tertiary textAlign="center">
						<h1 className="font3" style={styles}>
							Notable Projects
						</h1>
					</Segment>
					<Divider section />
					<Segment secondary>
						<Card.Group centered>
							{projects.map(project => (
								<Card
									color={project.color}
									href={project.siteURL}
									image={project.image}
									header={project.name}
									description={project.description}
									extra={
										<Buttons
											github={project.githubURL}
											site={project.siteURL}
											color={project.color}
										/>
									}
								/>
							))}
						</Card.Group>
					</Segment>
				</Segment>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default HomePage;
