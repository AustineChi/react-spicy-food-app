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
	<OrderContainer  data-testid="order-summary">
		<OrderHeader  data-testid="order-heading">Order</OrderHeader>
		{orderItems &&
			orderItems.map((item) => (
				<OrderItems key={`order-${item.id}`}  data-testid="order-item">
					<OrderName  data-testid={`order-name-${item.id}`}>
						<span role="img" aria-label="spice">
							🌯
						</span>
						{item.name}
						<span
							className="order__spice"
							 data-testid={`order-spice-${item.id}`}
						>
							{spiceEmoji(item.spice)}
						</span>
					</OrderName>
					<OrderPrice>
						<span  data-testid={`order-price-${item.id}`}>
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
				<span  data-testid="order-total">
					₦
					{orderItems.reduce(
						(curr, val) => curr + val.price * val.quantity,
						0
					)}
				</span>
			</OrderHeadingTotal>
		) : (
			<OrderHeaderNothing  data-testid="order-heading-nothing">
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
