import styled from "styled-components";

export const Header = styled.header`
    align-items: center;
    background-color: #1C5D7D;
    box-shadow: 2px 3px 6px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    display: flex;
    height: 12vh;
    justify-content: space-around;
    margin-bottom: 1%;
    overflow: hidden;

    .logo {
        height: 40vh;
    }

    .search-bar {
        border: none;
        border-radius: 1%;
        height: 8vh;
        font-size: 2.5vh;
        outline : none;
        padding: 0.5%;
        width: 38vw;
    }

    input[type="search"]::-webkit-search-cancel-button { 
        display: none; 
    }

    .login {
        display: flex;
        flex-direction: column;
    }
      
    .btn-registrate {
        border: 1px solid #91AA9D;
        border-radius: 2%;
        color: #FFF;
        cursor: pointer;
        font: normal normal 15px/1 "Open Sans", sans-serif;
        margin-right: 15px;
        padding: 8px 24px;
        text-decoration: none;
    }

    .btn-login {
        border: none;
        color: #FFF;
        cursor: pointer;
        font: normal normal 15px/1 "Open Sans", sans-serif;
        text-decoration: none;
    }
`