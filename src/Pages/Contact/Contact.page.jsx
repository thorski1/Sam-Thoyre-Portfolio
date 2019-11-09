import React from "react";
import { Grid, Container } from "semantic-ui-react";

import { ImageSegment } from "./Contact.components/Contact.ImageSegment";
import { Intro } from "./Contact.components/Contact.Intro";
import { Info } from "./Contact.components/Contact.Info";

const Contact = () => (
	<Container>
		<Grid stackable columns={2}>
			<Grid.Row stretched>
				<Grid.Column>
					<ImageSegment />
				</Grid.Column>
				<Grid.Column>
					<Intro />
					<Info />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default Contact;
