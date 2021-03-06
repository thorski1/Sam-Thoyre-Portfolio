import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import HomePage from "../Pages/HomePage/HomePage.page";
import Skills from "../Pages/Skills/Skills.page";
import Coursework from "../Pages/Coursework/Coursework.page";
import Projects from "../Pages/Projects/Projects.page";
import About from "../Pages/About/About.page";
import Contact from "../Pages/Contact/Contact.page";
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";
import Page from "../Components/Page/Page";
import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
	state = {
		activeItem: ""
	};

	handleItemClick = (e, { name }) =>
		this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<Navbar activeItem={activeItem} />
				<Route
					render={({ location }) => (
						<TransitionGroup>
							<CSSTransition
								key={location.key}
								classNames="page"
								timeout={1000}
							>
								<Switch>
									<Route
										exact
										path="/"
										render={routeProps => (
											<Page>
												<HomePage {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/skills"
										render={routeProps => (
											<Page>
												<Skills {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/projects"
										render={routeProps => (
											<Page>
												<Projects {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/coursework"
										render={routeProps => (
											<Page>
												<Coursework {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/about"
										render={routeProps => (
											<Page>
												<About {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/contact"
										render={routeProps => (
											<Page>
												<Contact {...routeProps} />
											</Page>
										)}
									/>
									<Route
										render={routeProps => (
											<Page>
												<HomePage {...routeProps} />
											</Page>
										)}
									/>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}

export default App;
