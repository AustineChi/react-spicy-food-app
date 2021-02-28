import React from "react";
import { render, cleanup } from "@testing-library/react";
import Order from "./Order";

afterEach(cleanup)

describe('<Order/>', () => {
    it('Renders without crashing', () => {
        render(<Order/>)
    })
    it('should display total price', () => {
        const { getByTestId }  = render(<Order />)
        expect(getByTestId('order-total')).toHaveTextContent(0)
      
    })
    it('should display order item', () => {
        const { getByTestId }  = render(<Order />)
      
    })
    it('should display order item spice', () => {
        const { getByTestId }  = render(<Order />)
      
    })
    it('should display order item price', () => {
        const { getByTestId }  = render(<Order />)
      
    })
})