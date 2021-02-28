import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Controls from "./Controls";


const items = [{
    id: 1,
    name: "Afang Soup",
    image: "/images/afang.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nam et est ornare.",
    price: 500,
    available: true,
    spice: 1,
    quantity: 3
  },
  {
    id: 2,
    name: "Bitter Leaf Soup",
    image: "/images/bitter.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nam et est ornare.",
    price: 700,
    available: true,
    spice: 2,
    quantity: 1

  }]

  beforeEach(cleanup);

  const setOrderItems = jest.fn();


describe('<Controls/>', () => {
    it('Renders without crashing', () => {
        render(<Controls orderItems={items} item={items[0]} setOrderItems={setOrderItems}/>)
    })
    it('decrement item quantity by 1 on MinusIcon click', () => {
        const {  getByText }  = render(<Controls orderItems={items} item={items[0]} setOrderItems={setOrderItems}/>)
        fireEvent.click(getByText('minus.svg'))

        expect(items[0].quantity).toBe(2)
    })
    it('increment item quantity by 1 on PlusIcon click', () => {
        const {  getByText }  = render(<Controls orderItems={items} item={items[0]} setOrderItems={setOrderItems} />)
        fireEvent.click(getByText('plus.svg'))
        expect(items[0].quantity).toBe(3)
    })

    it('delete item on DeleteIcon click', () => {
        const 
        const {  getByText }  = render(<Controls orderItems={items} item={items[0]} setOrderItems={setOrderItems} />)
        fireEvent.click(getByText('delete.svg'));

        expect(items.length).toBe(1)
    })
})