import React from "react";
import "./coursework.css";
import { Card, Statistic, Icon } from "semantic-ui-react";
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
			<Statistic
				className="statistic"
				size="large"
				color="grey"
			>
				<Statistic.Value>
					<Icon color="grey" name="clock outline" />
					{totalQuantity}
				</Statistic.Value>
				<Statistic.Label>Hours Completed</Statistic.Label>
			</Statistic>

			<Card.Group>
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
