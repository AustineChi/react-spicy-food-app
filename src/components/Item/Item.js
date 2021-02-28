import React from "react";
import { arrayOf, shape, func, string, number, bool, object } from "prop-types";
import { spiceEmoji } from "../../App";
import {
    ItemsContainer,
    ItemInfo,
    ItemHeading,
    ItemInfoDescription,
    Button,
    ItemImage,
} from "./Item.styles";

const Item = ({ item, orderItems, setOrderItems }) => {
    return (
        <ItemsContainer key={item.id} data-test-id="item">
            <ItemInfo>
                <ItemHeading data-test-id={`item-heading-${item.id}`}>
                    {item.name}
                    <span
                        role="img"
                        aria-label="spice"
                        data-test-id={`spice-${item.id}`}
                    >
                        {spiceEmoji(item.spice)}
                    </span>
                </ItemHeading>

                <ItemInfoDescription
                    data-test-id={`item-description-${item.id}`}
                >
                    {item.desc}
                </ItemInfoDescription>
                <Button
                    data-test-id={`add-item-${item.id}`}
                    type="button"
                    onClick={() => {
                        if (
                            orderItems.find(
                                (orderItem) => orderItem.id === item.id
                            )
                        ) {
                            orderItems.find(
                                (orderItem) => orderItem.id === item.id
                            ).quantity += 1;
                            setOrderItems([...orderItems]);
                        } else {
                            setOrderItems([...orderItems, item]);
                        }
                    }}
                >
                    {`Add ${item.name} | ₦${item.price}`}
                </Button>
            </ItemInfo>
            <ItemImage
                data-test-id={`image-${item.id}`}
                src={item.image}
                alt={item.name}
            />
        </ItemsContainer>
    );
};

Item.propTypes = {
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

export default Item;
