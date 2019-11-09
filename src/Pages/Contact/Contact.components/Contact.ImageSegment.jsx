import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

const fontSize = {
	fontSize: "20px"
};

export const ImageSegment = () => (
	<Segment
		tertiary
		stacked
		inverted
		color="blue"
		textAlign="center"
	>
		<Image
			verticalAlign="middle"
			rounded
			src="/assets/SharkNMe.jpg"
		/>
		<h3 className="font3" style={fontSize}>
			Me and my little baby shark hanging out
		</h3>
	</Segment>
);
