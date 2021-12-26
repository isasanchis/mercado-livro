import styled from "styled-components";

export const Form = styled.form`
    align-items: center;
    border: 1px solid #91AA9D;
    border-radius: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 1.5%;
    width: 30vw;

    h1 {
        font-size: 4vh;
        margin-top: 0;
    }

    .input-container {
        align-items: center;
        border: 0;
        display: flex;
        flex-direction: column;
    }

    legend {
        font-size: 2.5vh;
        font-weight: bold;
        padding: 0;
    }
      
    input {
        align-items: center;
        font-size: 2vh;
        height: 5vh;
        margin: 1%;
        padding: 0.7%;
        outline: none;
        width: 25vw;
    }

    .submit-btn {
        background: #F7F7F7;
        border: 1px solid #91AA9D;
        border-radius: 2%;
        cursor: pointer;
        font-size: 2vh;
        height: 5vh;
        width: 24vw;
    }
`