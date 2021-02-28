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
        <ItemsContainer key={item.id} >
            <ItemInfo>
                <ItemHeading>
                    {item.name}
                    <span
                        role="img"
                        aria-label="spice"
                    >
                        {spiceEmoji(item.spice)}
                    </span>
                </ItemHeading>

                <ItemInfoDescription
                >
                    {item.desc}
                </ItemInfoDescription>
                <Button
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
