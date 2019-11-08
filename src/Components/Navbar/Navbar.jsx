import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { buttons } from './Navbar.content'

export default class Navbar extends Component {
	// state = {
	// 	activeItem: ""
	// };

	// handleItemClick = (e, { name }) =>
	// 	this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.props;

		return (
			<Menu color="blue" inverted stackable>
				{buttons.map(item => (
					<Link to={item.to}>
						<Menu.Item
							name={item.name}
							active={activeItem === item.name}
							onClick={this.handleItemClick}
						>
							<Icon
								color="white"
								name={item.iconName}
								size="large"
							/>
							{item.name}
						</Menu.Item>
					</Link>
				))}
				<Menu.Item
					as="a"
					name="blog"
					active={activeItem === "blog"}
					onClick={this.handleItemClick}
					href="https://thorski1.github.io/ProgressBlog/"
				>
					<Icon
						color="white"
						name="pencil square"
						size="large"
					/>
					Blog
				</Menu.Item>
			</Menu>
		);
	}
}
