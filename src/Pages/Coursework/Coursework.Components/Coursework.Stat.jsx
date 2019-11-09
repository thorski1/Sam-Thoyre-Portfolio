import React from "react";
import { Statistic, Icon } from "semantic-ui-react";
import { courses } from "../coursework";

export default function Stat() {
	function sumProperty(arr, type) {
		return arr.reduce((total, obj) => {
			return total + obj[type];
		}, 0);
	}

	let totalQuantity = sumProperty(courses, "hours");

	return (
		<Statistic centered size="large" color="grey">
			<Statistic.Value>
				<Icon color="grey" name="clock outline" />
				{totalQuantity}
			</Statistic.Value>
			<Statistic.Label>
				<h1 className="font4">Hours Completed</h1>
			</Statistic.Label>
		</Statistic>
	);
}
