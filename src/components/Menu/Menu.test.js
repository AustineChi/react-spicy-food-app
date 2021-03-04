import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu";
import meals from "../../data.json";

describe("<Menu />", () => {
	let orderItems = [...meals.slice(0, 2)];
	let setOrderItems = jest.fn();

	test("Renders without crashing", () => {
		render(
			<Menu
				meals={[...meals]}
				orderItems={orderItems}
				setOrderItems={setOrderItems}
			/>
		);
	});

	test("add item to order item on button click", () => {
		const { getAllByRole } = render(
			<Menu
				meals={[...meals]}
				orderItems={orderItems}
				setOrderItems={setOrderItems}
			/>
		);
		const button = getAllByRole("button")[2];
		fireEvent.click(button);
		expect(setOrderItems).toHaveBeenCalledWith([...orderItems, meals[2]]);
	});

	test("increment item quantity on button click if item already exist", () => {
		const { queryAllByRole } = render(
			<Menu
				meals={[...meals]}
				orderItems={orderItems}
				setOrderItems={setOrderItems}
			/>
		);
		const button = queryAllByRole("button")[0];
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		expect(orderItems[0].quantity).toBe(4);
	});
});
