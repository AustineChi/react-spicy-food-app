import React from "react";
import { arrayOf, shape, func, string, number, bool } from "prop-types";
import Item from "../Item";
import { Menu, MenuHeader, MenuItems } from "./Menu.styles";

const MenuComponent = ({ meals, orderItems, setOrderItems }) => {
	const addItem = (item) => {
		if (orderItems.find((orderItem) => orderItem.id === item.id)) {
			const orders = [...orderItems];
			orders.find((orderItem) => orderItem.id === item.id).quantity += 1;
			setOrderItems([...orders]);
		} else {
			setOrderItems([...orderItems, item]);
		}
	};

	return (
		<Menu className="menu">
			<MenuHeader>Menu</MenuHeader>
			<MenuItems>
				{meals.map((item) => (
					<Item key={`${item.id}`} item={item} addItem={addItem} />
				))}
			</MenuItems>
		</Menu>
	);
};

const objectShape = {
	id: number,
	name: string,
	image: string,
	desc: string,
	price: number,
	available: bool,
	spice: number,
	quantity: number,
};

MenuComponent.propTypes = {
	meals: arrayOf(shape(objectShape)),
	orderItems: arrayOf(shape(objectShape)),
	setOrderItems: func,
};

export default MenuComponent;
