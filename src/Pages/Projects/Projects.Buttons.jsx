import React from "react";
import { Button, Icon } from "semantic-ui-react";

export const Buttons = (props) => (
					<div className="ui two buttons">
						<Button
							animated="fade"
							href={props.github}
							color="black"
						>
							<Button.Content hidden>
								Source Code
							</Button.Content>
							<Button.Content visible>
								<Icon size="large" name="github" />
							</Button.Content>
						</Button>
						<Button.Or />
						<Button
							animated="fade"
							href={props.site}
							color={props.color}
						>
							<Button.Content hidden>
								Live Site
							</Button.Content>
							<Button.Content visible>
								<Icon size="large" name="globe" />
							</Button.Content>
						</Button>
					</div>
				);
