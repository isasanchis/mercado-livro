import styled from "styled-components";

export const BooksContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30vh, 1fr));
    grid-column-gap: 5%;
    justify-content: center;
    padding: 4%;

    .book-content {
        height: 50vh;
        text-align: center;
    }

    .book-image {
        height: 35vh;
        padding: 3%;
    }

    .book-title, .book-price {
        font-size: 3vh;
        margin: auto;
    }
`