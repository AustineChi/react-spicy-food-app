import React from "react";
import { arrayOf, shape, func, string, number, bool } from "prop-types";
import Controls from "../Controls"
import { spiceEmoji } from "../../App";
import {
	OrderContainer,
	OrderItems,
	OrderName,
	OrderPrice,
	OrderHeader,
	OrderHeadingTotal,
	OrderHeaderNothing,
} from "./Order.styles";


const Order = ({ orderItems, setOrderItems }) => (
	<OrderContainer>
		<OrderHeader>Order</OrderHeader>
		{orderItems &&
			orderItems.map((item) => (
				<OrderItems key={`order-${item.id}`}>
					<OrderName>
						<span role="img" aria-label="spice">
							🌯
						</span>
						{item.name}
						<span
							className="order__spice"
						>
							{spiceEmoji(item.spice)}
						</span>
					</OrderName>
					<OrderPrice>
						<span>
							₦{item.price * item.quantity}
						</span>
					</OrderPrice>
          <Controls
              item={item}
              orderItems={orderItems}
              setOrderItems={setOrderItems}
          />
				</OrderItems>
			))}
		{orderItems && orderItems.length > 0 ? (
			<OrderHeadingTotal>
				Total Price:
				<span>
					₦
					{orderItems.reduce(
						(curr, val) => curr + val.price * val.quantity,
						0
					)}
				</span>
			</OrderHeadingTotal>
		) : (
			<OrderHeaderNothing>
				It looks like you have an empty stomach, order now!
				<span role="img" aria-label="spice">
					🌯🌯🌯
				</span>
			</OrderHeaderNothing>
		)}
	</OrderContainer>
);

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
