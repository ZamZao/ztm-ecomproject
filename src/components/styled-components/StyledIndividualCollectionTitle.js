import styled from "styled-components"


export const StyledIndividualCollectionTitle = styled.div`

background-color: rgba(255,255,255,0.7);
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
position:absolute;

.title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    text-transform:uppercase;
}   

.subtitle {
    font-weight: lighter;
    font-size: 16px;
}
`