import React from "react";
import { Card } from "semantic-ui-react";
import { courses } from "../coursework";

export default function CourseCard() {
	return (
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
	);
}
