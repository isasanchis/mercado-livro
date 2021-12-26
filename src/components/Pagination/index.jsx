import React, { useEffect, useState } from "react";
import * as C from "./styles";

export const Pagination = (props) => {
    let currentPage = props.currentPage;
    let totalPages = props.totalPages;
    const [disable] = useState(true); //disable button 

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    const previousPage = () => {
        props.previousPage();
    };

    const nextPage = () => {
        props.nextPage();
    };
     
    return (
        <C.Pagination>
            <button
                className={currentPage === 0 ? 'disabled' : 'page-list'} 
                onClick={previousPage}
                disabled={currentPage === 0 ? disable : ''}>
                    &laquo; Previous
            </button>
            <button
                className="active">
                    {currentPage+1}
            </button>
            <button 
                className={currentPage === totalPages-1 ? 'disabled' : 'page-list'} 
                onClick={nextPage}
                disabled={currentPage === totalPages-1 ? disable : ''}>
                    Next &raquo;
            </button>
	    </C.Pagination>
    );
};