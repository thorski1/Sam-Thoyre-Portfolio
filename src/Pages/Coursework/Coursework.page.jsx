import React from "react";
import { Divider } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

import Stat from "./Coursework.Components/Coursework.Stat";
import CourseCard from "./Coursework.Components/Coursework.CourseCard";
import { Title } from "../../Components/Title/Title";

export default function Coursework() {
	return (
		<div className="container">
			<Title
				title="Coursework"
				color="blue"
				inverted="true"
			/>
			<Divider section />
			<Stat />
			<Divider section />
			<LazyLoad height={200} offset={100} once>
				<CourseCard />
			</LazyLoad>
		</div>
	);
}
