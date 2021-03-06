import styled from "styled-components";

export const StyledHeader = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
    .logo-container {
        height: 100%;
        width: 70px;
        padding: 25px;
    }
    .header-options {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
            .header-option {
            padding: 10px 15px;
            cursor: pointer;
            }
        
    }   

`