import React from "react";
import { Card, Statistic, Icon, Divider, Segment, Header } from "semantic-ui-react";
import { courses } from "./coursework";

export default function Coursework() {
	function sumProperty(arr, type) {
		return arr.reduce((total, obj) => {
			return total + obj[type];
		}, 0);
	}

	let totalQuantity = sumProperty(courses, "hours");

	return (
		<div className="container">
			<Segment
				inverted
				color="blue"
				tertiary
				textAlign="center"
			>
				<h1 className="font3">Coursework</h1>
			</Segment>
			<Statistic centered size="large" color="grey">
				<Statistic.Value>
					<Icon color="grey" name="clock outline" />
					{totalQuantity}
				</Statistic.Value>
				<Statistic.Label>Hours Completed</Statistic.Label>
			</Statistic>
			<Divider section />
			<Card.Group centered>
				{courses.map(course => (
					<Card
						href={course.link}
						color={course.color}
						image={course.image}
						header={course.name}
						meta={course.platform}
						description={course.instructor}
						extra={
							course.hours > 1
								? course.hours + " hours"
								: course.hours + " hour"
						}
					/>
				))}
			</Card.Group>
		</div>
	);
}
