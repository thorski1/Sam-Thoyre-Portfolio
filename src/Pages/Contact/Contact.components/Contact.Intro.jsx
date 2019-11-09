import React from "react";
import { Header, Segment } from "semantic-ui-react";
import SplitText from "react-pose-text";
import { charPoses } from '../../../PoseFunctions/PoseFunctions'

export const Intro = () => (
	<Segment
		raised
		inverted
		color="blue"
		tertiary
		textAlign="center"
	>
		<SplitText
			initialPose="exit"
			pose="enter"
			charPoses={charPoses}
			className="font3"
		>
			Get in touch with me!
		</SplitText>
		<Segment>
			<Header as="h3">
				I am looking for new opportunities! If you would
				like to get in touch with me, I would love to chat!
				Please feel free to reach out to me using any of the
				methods listed below and I'll be sure to get right
				back to you!
			</Header>
		</Segment>
	</Segment>
);
