import React from "react";
import { arrayOf, shape, func, string, number, bool, object } from "prop-types";
import {
   ControlBox
} from "./Controls.styles";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import { ReactComponent as MinusIcon } from "./assets/minus.svg";
import { ReactComponent as DeleteIcon } from "./assets/delete.svg";

const Controls = ({ item, orderItems, setOrderItems }) => {
    return (
        <ControlBox>
        <MinusIcon
            onClick={() => {
                if (item.quantity > 1) {
                    orderItems.find(
                        (orderItem) => orderItem.id === item.id
                    ).quantity -= 1;
                    setOrderItems([...orderItems]);
                }
            }}
        />
        <PlusIcon
            onClick={() => {
                orderItems.find(
                    (orderItem) => orderItem.id === item.id
                ).quantity += 1;
                setOrderItems([...orderItems]);
            }}
        />
        <DeleteIcon
            onClick={() => {
                setOrderItems([
                    ...orderItems.filter(
                        (orderItem) => orderItem.id !== item.id
                    ),
                ]);
            }}
        />
    </ControlBox>
    );
};

Controls.propTypes = {
    item: object,
    orderItems: arrayOf(
        shape({
            id: number,
            name: string,
            image: string,
            desc: string,
            price: number,
            available: bool,
            spice: number,
            quantity: number,
        })
    ),
    setOrderItems: func,
};

export default Controls;
