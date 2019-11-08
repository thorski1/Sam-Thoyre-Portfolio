import React, { Component } from "react";
import Navbar from "./Navbar";
import HomePage from "./Pages/HomePage/HomePage.page";
import Skills from "./Pages/Skills/Skills.page";
import Coursework from "./Pages/Coursework/Coursework.page";
import Projects from "./Pages/Projects/Projects.page";
import About from "./Pages/About/About.page";
import Contact from "./Pages/Contact/Contact.page";
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";
import Page from "./Page";
import {
	Switch,
	Route
} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div>
				
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
												<Navbar />
												<HomePage {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/skills"
										render={routeProps => (
											<Page>
												<Navbar />
												<Skills {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/projects"
										render={routeProps => (
											<Page>
												<Navbar />
												<Projects {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/coursework"
										render={routeProps => (
											<Page>
												<Navbar />
												<Coursework {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/about"
										render={routeProps => (
											<Page>
												<Navbar />
												<About {...routeProps} />
											</Page>
										)}
									/>
									<Route
										exact
										path="/contact"
										render={routeProps => (
											<Page>
												<Navbar />
												<Contact {...routeProps} />
											</Page>
										)}
									/>
									<Route
										render={routeProps => (
											<Page>
												<Navbar />
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
