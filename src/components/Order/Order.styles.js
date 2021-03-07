import styled from "styled-components";

export const OrderContainer = styled.section`
	width: 100%;
`;



export const OrderItem = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	align-items: center;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
	background-color: white;
`;

export const Item = styled.div`
	grid-template-columns: 2fr 1fr 1fr;
	grid-gap: 1rem;
	display: grid;
	padding: 10px;
	align-items: center;
`;

export const OrderName = styled.h3`
	margin: 0;
	& > span {
		padding: 0 4px
	}
`;

export const OrderPrice = styled.div`
	text-align: right;
	font-weight: 700;
`;

export const OrderHeader = styled.h3`
	text-align: center;
	font-family: "Titan One", cursive;
	color: #f08a5d;
	text-shadow: 1px 1px #ff8c00;
	font-size: 30px;
`;

export const OrderQuantity = styled.div`
	color: #f08a5d;
	font-size: 16px;
	font-weight: 700;
	padding: 0 20px;
`;

export const OrderHeadingTotal = styled(OrderHeader)`
	font-size: 25px;
	color: #fff;
	& > span {
		padding: 0 7px
	}
`;

export const OrderHeaderNothing = styled.h4`
	text-align: center;
	color: #fff;
`;

export const ControlBox = styled.div`
        display flex;
        item align: center;
        content align: center;
        & > svg {
                width: 20px;
                height: 20px;
                margin: 10px;
                cursor: pointer
        }
`;

