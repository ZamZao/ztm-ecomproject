import styled from "styled-components"
import { css } from "styled-components"
import { StyledBackgroundImage } from "./StyledBackgroundImage"

export const StyledIndividualCollectionContainer = styled.div`


    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow:hidden;

    &:hover {
        cursor:pointer;
        opacity:0.9;
        ${StyledBackgroundImage}{
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45,0.95);
        }
    }

    ${props=> props.size === 'large' && css` height: 380px;`}
    
    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }


`