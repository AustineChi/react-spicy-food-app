import React from "react";
import { arrayOf, shape, func, string, number, bool } from "prop-types";
import { spiceEmoji } from "../../App";
import {
	OrderContainer,
	OrderItem,
	Item,
	OrderName,
	OrderPrice,
	OrderHeader,
	OrderHeadingTotal,
	OrderHeaderNothing,
	ControlBox,
	OrderQuantity
} from "./Order.styles";

import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import { ReactComponent as MinusIcon } from "./assets/minus.svg";
import { ReactComponent as DeleteIcon } from "./assets/delete.svg";

const Order = ({ orderItems, setOrderItems }) => {
	const increment = (item) => {
		orderItems.find((orderItem) => orderItem.id === item.id).quantity += 1;
		setOrderItems([...orderItems]);
	};
	const decrement = (item) => {
		if (item.quantity > 1) {
			orderItems.find(
				(orderItem) => orderItem.id === item.id
			).quantity -= 1;
			setOrderItems([...orderItems]);
		}
	};

	const deleteItem = (item) => {
		setOrderItems([
			...orderItems.filter((orderItem) => orderItem.id !== item.id),
		]);
	};

	return (
		<OrderContainer>
			<OrderHeader>Order</OrderHeader>
			{orderItems &&
				orderItems.map((item) => (
					<OrderItem key={`order-${item.id}`}>
						<Item
							title={`order-${item.id}`}
						>
							<OrderName>
								<span role="img" aria-label="spice">
									🌯
								</span>
								{item.name}
								<span>{spiceEmoji(item.spice)}</span>
							</OrderName>
							<OrderPrice>
								<span>{`₦${item.price * item.quantity}`}</span>
							</OrderPrice>
							<ControlBox>
								<MinusIcon onClick={() => decrement(item)} />
								<PlusIcon onClick={() => increment(item)} />
								<DeleteIcon onClick={() => deleteItem(item)} />
							</ControlBox>
						</Item>
						<OrderQuantity>
							{`qauntity: ${item.quantity}`}
						</OrderQuantity>
					</OrderItem>
				))}
			{orderItems && orderItems.length > 0 ? (
				<OrderHeadingTotal title="order heading total">
					Total Price:
					<span title="total price">
						{`₦${orderItems.reduce(
							(curr, val) => curr + val.price * val.quantity,
							0
						)}`}
					</span>
				</OrderHeadingTotal>
			) : (
				<OrderHeaderNothing title="order heading nothing">
					It looks like you have an empty stomach, order now!
					<span role="img" aria-label="spice">
						🌯🌯🌯
					</span>
				</OrderHeaderNothing>
			)}
		</OrderContainer>
	);
};

Order.propTypes = {
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

export default Order;
