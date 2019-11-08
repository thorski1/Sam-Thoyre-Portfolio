import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	state = {
		activeItem: ""
	};

	handleItemClick = (e, { name }) =>
		this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu color="blue" inverted stackable>
				<Link to="/">
					<Menu.Item>
						<Icon color="white" name="home" size="large" />
						Home
					</Menu.Item>
				</Link>
				<Link to="/skills">
					<Menu.Item
						name="skills"
						active={activeItem === "skills"}
						onClick={this.handleItemClick}
					>
						<Icon
							color="white"
							name="js square"
							size="large"
						/>
						Skills
					</Menu.Item>
				</Link>
				<Link to="/projects">
					<Menu.Item
						name="projects"
						active={activeItem === "projects"}
						onClick={this.handleItemClick}
					>
						<Icon color="white" name="code" size="large" />
						Projects
					</Menu.Item>
				</Link>
				<Link to="/coursework">
					<Menu.Item
						name="coursework"
						active={activeItem === "coursework"}
						onClick={this.handleItemClick}
					>
						<Icon color="white" name="book" size="large" />
						Coursework
					</Menu.Item>
				</Link>
				<Link to="/about">
					<Menu.Item
						name="about"
						active={activeItem === "about"}
						onClick={this.handleItemClick}
					>
						<Icon
							color="white"
							name="info circle"
							size="large"
						/>
						About Me
					</Menu.Item>
				</Link>
				<Link to="/contact">
					<Menu.Item
						name="contact"
						active={activeItem === "contact"}
						onClick={this.handleItemClick}
					>
						<Icon color="white" name="send" size="large" />
						Contact
					</Menu.Item>
				</Link>
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
