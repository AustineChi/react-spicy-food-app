import styled, {keyframes} from "styled-components";

const buttonAnimate = keyframes`
    0% {  opacity: 0;  translateY(40px) }
    100% {  opacity: 1; transform: translate(0) }
`
export const ItemsContainer = styled.div`
    display: grid;
    padding: 20px;
    align-items: center;
    grid-gap: 1rem;
    grid-template-columns: 1fr 200px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    background-color: white;
    border-radius: 0.25rem;
`;

export const ItemInfo = styled.div`
        align-items: center;

`;

export const ItemHeading = styled.h3`
        padding 4px;
        & > span {
            margin: 0 4px
        }
`;

export const ItemInfoDescription = styled.p`
        align-items: center;
        line-height: normal;
`;

export const Button = styled.button`
        cursor: pointer;
        background-color: #f08a5d;
        border: 0;
        width: 100%;
        color: white;
        border-radius: 0.25rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
        padding: 10px;
        outline: none;
        animation: ${buttonAnimate} .7s ease-out .5s;
        animation-fill-mode: backwards;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
        }
        &:active {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(4px);
        }
}
`

export const ItemImage = styled.img`
        max-width: 200px;
        border-radius: 5px
`