import styled from "styled-components";

export const Pagination = styled.section`
    display: flex;
    justify-content: center;
    width: 99%;
    margin-bottom: 2%;

    .page-list, .active, .disabled {
        background: none;
        border: none;
        color: #3E606F;
        font-size: 3vh;
        font-family: Open Sans;
    }

    .page-list {
        cursor: pointer;
    }

    .disabled {
        cursor: inherit;
        color: #999;
    }
`