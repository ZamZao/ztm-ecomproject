import styled from "styled-components";

export const StyledBackgroundImage = styled.div`

    background-image: url(${props => props.imgUrl});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    width:100%;
    height:100%;

`