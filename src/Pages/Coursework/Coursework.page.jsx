import React from "react";
import { Divider } from "semantic-ui-react";

import Stat from "./Coursework.Components/Coursework.Stat";
import CourseCard from "./Coursework.Components/Coursework.CourseCard";
import { Title } from "../../Components/Title/Title";

export default function Coursework() {
	return (
		<div className="container">
			<Title title="Coursework" color="blue" inverted="true" />
			<Divider section />
			<Stat />
			<Divider section />
			<CourseCard />
		</div>
	);
}
