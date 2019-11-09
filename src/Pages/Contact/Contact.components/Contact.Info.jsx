import React from "react";
import { List, Icon, Segment } from "semantic-ui-react";

import { contactInfo } from "../Contact";

export const Info = () => (
	<Segment secondary raised color="orange">
		<List animated verticalAlign="middle">
			{contactInfo.map(contact => (
				<List.Item as={contact.link} href={contact.address}>
					<Icon
						color={contact.color}
						name={contact.iconName}
						size="huge"
					/>
					<List.Content>
						<h2 className="font4">{contact.info}</h2>
					</List.Content>
				</List.Item>
			))}
		</List>
	</Segment>
);
