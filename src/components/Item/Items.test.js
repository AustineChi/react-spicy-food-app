import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item";

describe('<Item/>', () => {
    it('Renders without crashing', () => {
        render(<Item/>)
    })
})