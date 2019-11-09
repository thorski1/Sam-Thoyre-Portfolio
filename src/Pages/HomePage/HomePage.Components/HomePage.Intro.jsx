import React from "react";
import {
	Grid,
	Image,
	Segment,
	Icon,
	Divider,
	Card
} from "semantic-ui-react";

import { icons } from "../HomePage.Icons";

export const Intro = () => (
	<Segment tertiary raised textAlign="center">
		<h1 className="font1">Sam Thoyre</h1>
		<h2 className="font2">Web Developer Extraordinaire</h2>
		<Divider section />
		<Segment secondary raised textAlign="center">
			{icons.map(icon => (
				<Icon
					color={icon.color}
					name={icon.name}
					size="huge"
				/>
			))}
		</Segment>
	</Segment>
);