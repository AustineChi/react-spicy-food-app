import React from "react";
import { render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import Item from "./Item";
import meals from "../../data.json";

describe("<Item />", () => {
	const item = { ...meals[0] };
	const mockAddItem = jest.fn();
	beforeEach(cleanup);

	test("should render name, desc, chilly and image", () => {
		const { getByText, getByAltText } = render(
			<Item item={item} addItem={mockAddItem} />
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
});
