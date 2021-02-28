import React from "react";
import { render } from "@testing-library/react";
import Menu from "./Menu";

describe('<Menu/>', () => {
    it('Renders without crashing', () => {
        render(<Menu/>)
    })
})