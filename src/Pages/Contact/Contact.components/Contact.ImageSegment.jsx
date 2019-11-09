import React from "react";
import { Image, Segment } from "semantic-ui-react";
import SplitText from "react-pose-text";
import { charPoses } from "../../../PoseFunctions/PoseFunctions";


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
		<SplitText
			initialPose="exit"
			pose="enter"
			charPoses={charPoses}
			className="font5"
		>
			Me and my little baby shark hanging out
		</SplitText>
	</Segment>
);
