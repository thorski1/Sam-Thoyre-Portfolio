import React from "react";
import { Segment } from "semantic-ui-react";

export const Title = props => (
	<Segment
		inverted={props.inverted}
		color={props.color}
		textAlign="center"
		tertiary
	>
		<h1 className="font3">{props.title}</h1>
	</Segment>
);
