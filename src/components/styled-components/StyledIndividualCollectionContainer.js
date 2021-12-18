import styled from "styled-components"


export const StyledIndividualCollectionContainer = styled.div`

    background-color:blue;

    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }


`