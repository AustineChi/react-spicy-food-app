import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "./Item";
import meals from "../../data.json";

describe("<Item />", () => {
	const item = { ...meals[0] };
	const mockAddItem = jest.fn();
	beforeEach(cleanup);

	test("should render name, desc, chilly and image", () => {
		const { getByText, getByAltText } = render(
			<Item
				item={item}
				addItem={mockAddItem}
			/>
		);

		const name = getByText(item.name);
		const desc = getByText(item.desc);
		const image = getByAltText(item.name);
		const chilly = getByText("🌶️");

		expect(name).toBeVisible();
		expect(desc).toBeVisible();
		expect(image).toBeVisible();
		expect(chilly).toBeVisible();
	});

	// test("add item to order items on button click", async() => {
    //     const item = { ...meals[0] };
	// 	const { getByRole } = render(
	// 		<Item
	// 			item={item}
	// 			addItem={mockAddItem}
	// 		/>
	// 	);
    //     const button = getByRole("button");
    //     act(() => {
    //         fireEvent.click(button);
    //         fireEvent.click(button);
    //         fireEvent.click(button);
    //     })
    //     // expect(mockAddItem).toHaveBeenCalledWith(item);

	// });

	// test("increment item in order items if item already exist on button click", () => {
	// 	const { getByRole } = render(
	// 		<Item
	// 			item={item}
	// 			orderItems={orderItems}
	// 			setOrderItems={setOrderItems}
	// 		/>
	//     );

	//     const button = getByRole("button");

	//         fireEvent.click(button);
	//         fireEvent.click(button);

	//         console.log(item)

	//     expect(setOrderItems).toHaveBeenCalledWith([item]);
	//     expect(orderItems).toEqual([])

	// });
});
