import React from "react";
import { render, cleanup, fireEvent, waitFor, getAllByText } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import "@testing-library/jest-dom";
import Order from "./Order";
import meals from "../../data.json";

beforeEach(cleanup);

describe("<Order />", () => {
	const setOrderItems = jest.fn();
	const orderItems = [...meals.slice(0, 2)];

	it("Renders without crashing", () => {
		render(<Order orderItems={orderItems} setOrderItems={setOrderItems} />);
		// screen.debug()
	});

	it("should display order items", () => {
		const { getByText, getAllByText } = render(
			<Order orderItems={orderItems} setOrderItems={setOrderItems} />
		);

		const orderItemOneName = getByText(orderItems[0].name);
		const orderItemOnePrice = getByText(
			`₦${orderItems[0].price * orderItems[0].quantity}`
		);
		const orderItemOneQuantity = getAllByText(`qauntity: ${orderItems[0].quantity}`)[0];
		const orderItemOneChilly = getByText("🌶️");
		const orderItemTwoName = getByText(orderItems[1].name);
		const orderItemTwoPrice = getByText(
			`₦${orderItems[1].price * orderItems[1].quantity}`
		);
		const orderItemTwoQuantity = getAllByText(`qauntity: ${orderItems[1].quantity}`)[1]
		const orderItemTwoChilly = getByText("🌶️🌶️");
		const title = getByText("Order");

		expect(orderItemOneName).toBeVisible();
		expect(orderItemOnePrice).toBeVisible();
		expect(orderItemOneChilly).toBeVisible();
		expect(orderItemOneQuantity).toBeVisible();
		expect(orderItemTwoName).toBeVisible();
		expect(orderItemTwoPrice).toBeVisible();
		expect(orderItemTwoChilly).toBeVisible();
		expect(orderItemTwoQuantity).toBeVisible();
		expect(title).toBeVisible();
	});

	test("increment item quantity by 1 on PlusIcon click", () => {
		const { queryAllByText } = render(
			<Order orderItems={orderItems} setOrderItems={setOrderItems} />
		);

		const button = queryAllByText("plus.svg")[0];

		fireEvent.click(button);
		expect(setOrderItems).toHaveBeenCalledWith(orderItems);
		expect(orderItems[0].quantity).toBe(2);
		fireEvent.click(button);
		expect(setOrderItems).toHaveBeenCalledWith(orderItems);
		expect(orderItems[0].quantity).toBe(3);
	});

	test("decrement item quantity will not work if quantity is 1 on MinusIcon click", () => {
		const { queryAllByText } = render(
			<Order orderItems={orderItems} setOrderItems={setOrderItems} />
		);

		const minus = queryAllByText("minus.svg")[0];
		fireEvent.click(minus);
		fireEvent.click(minus);
		expect(orderItems[0].quantity).toBe(1);
	});

	test("decrement item quantity will work if quantity is greater than 1 on MinusIcon click", () => {
		const { queryAllByText } = render(
			<Order orderItems={orderItems} setOrderItems={setOrderItems} />
		);

		const minus = queryAllByText("minus.svg")[0];
		const plus = queryAllByText("plus.svg")[0];
		fireEvent.click(minus);
		fireEvent.click(minus);
		fireEvent.click(plus);
		fireEvent.click(plus);
		fireEvent.click(minus);
		expect(orderItems[0].quantity).toBe(2);
	});

	test("delete item on DeleteIcon click", async () => {
		const { queryAllByText, queryByTitle } = render(
			<Order orderItems={orderItems} setOrderItems={setOrderItems} />
		);
		const deleteBtn = queryAllByText("delete.svg")[0];
		fireEvent.click(deleteBtn);
		expect(setOrderItems).toHaveBeenCalledWith(orderItems);
	});

	it("should not display order heading total if orderItems is empty", () => {
		const { queryByTitle } = render(
			<Order orderItems={[]} setOrderItems={setOrderItems} />
		);
		expect(queryByTitle("order heading total")).not.toBeInTheDocument();
		expect(queryByTitle("order heading nothing")).toBeInTheDocument();
	});

	it("should display total price if orderItems has at least one item", () => {
		const expectedTotalPrice = orderItems.reduce(
			(curr, val) => curr + val.price * val.quantity,
			0
		);
		const { getByTitle } = render(
			<Order orderItems={orderItems} setOrderItems={setOrderItems} />
		);
		expect(getByTitle("total price").innerHTML).toBe(
			`₦${expectedTotalPrice}`
		);
	});
});
