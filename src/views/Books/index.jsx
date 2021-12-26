import React from "react";
import * as C from "./styles";
import { Pagination } from "../../components/Pagination";

export const Books = (props) => {
    return (
        <main>
            <C.BooksContainer>
                {props.listBooks}
            </C.BooksContainer>
            <Pagination
                previousPage={props.previousPage} 
                nextPage={props.nextPage}
                totalPages={props.totalPages}
                currentPage={props.currentPage}>
            </Pagination>
        </main>
    );
};