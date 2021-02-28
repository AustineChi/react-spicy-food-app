import React from "react";
import { arrayOf, shape, func, string, number, bool } from "prop-types";
import Item from "../Item";
import { Menu, MenuHeader, MenuItems } from "./Menu.styles";

const MenuComponent = ({ meals, orderItems, setOrderItems }) => (
    <Menu className="menu">
        <MenuHeader>Menu</MenuHeader>
        <MenuItems data-test-id="menu-items">
            {meals.map((item) => (
                <Item
                    key={`${item.id}`}
                    item={item}
                    orderItems={orderItems}
                    setOrderItems={setOrderItems}
                />
            ))}
        </MenuItems>
    </Menu>
);

const objectShape = {
  id: number,
  name: string,
  image: string,
  desc: string,
  price: number,
  available: bool,
  spice: number,
  quantity: number,
}

MenuComponent.propTypes = {
    meals: arrayOf(
        shape(objectShape)
    ),
    orderItems: arrayOf(
        shape(objectShape)
    ),
    setOrderItems: func,
};

export default MenuComponent;
