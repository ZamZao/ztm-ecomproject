import styled from "styled-components";

export const StyledArticlePreview = styled.div`
width: 22%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position:relative;

.image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .custom-button {
    width:80%;
    opacity:0.7;
    position:absolute;
    top:255px;
    display:none;
    align-items:center;

  }

  &:hover {
    .image {
      opacity:0.8;
    }
    .custom-button {
      opacity:0.85;
      display:flex;
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }


`