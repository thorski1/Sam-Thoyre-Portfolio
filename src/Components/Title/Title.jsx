import React from "react";
import SplitText from "react-pose-text";
import { Segment } from "semantic-ui-react";
import {charPoses} from "../../PoseFunctions/PoseFunctions"

export const Title = props => (
					<Segment
						inverted={props.inverted}
						color={props.color}
						textAlign="center"
						tertiary
					>
						<h1 className="font3">
							<SplitText
								initialPose="exit"
								pose="enter"
								charPoses={charPoses}
								className="font3"
							>
								{props.title}
							</SplitText>
						</h1>
					</Segment>
				);
