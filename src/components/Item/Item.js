import React from "react";
import { func, object } from "prop-types";
import { spiceEmoji } from "../../App";
import {
	ItemsContainer,
	ItemInfo,
	ItemHeading,
	ItemInfoDescription,
	Button,
	ItemImage,
} from "./Item.styles";

const Item = ({ item, addItem }) => {
	return (
		<ItemsContainer key={item.id}>
			<ItemInfo>
				<ItemHeading>
					{item.name}
					<span role="img" aria-label="spice">
						{spiceEmoji(item.spice)}
					</span>
				</ItemHeading>

				<ItemInfoDescription>{item.desc}</ItemInfoDescription>
				<Button type="button" onClick={() => addItem(item)}>
					{`${item.name} | ₦${item.price}`}
				</Button>
			</ItemInfo>
			<ItemImage src={item.image} alt={item.name} />
		</ItemsContainer>
	);
};

Item.propTypes = {
	item: object,
	addItem: func,
};

export default Item;
