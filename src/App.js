import { React, useEffect, useState } from "react";
import * as C from "./App.style";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    const [books, setBooks] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchBook, setSearchBook] = useState('');

    // Requisição dos livros:

    useEffect(() => {
        fetch("http://localhost:8080/books?page="+currentPage)
            .then(response => response.json())
            .then(data => {
                setBooks(data.items)
                setTotalPages(data.totalPages)
                setCurrentPage(data.currentPage)
            });
    }, [currentPage]);

    // Listagem de todos os livros:

    var listBooks =
        books.map(book => {
            return <div className="book-content" key={book.id}>
                <img 
                    src="http://livrariaconcreta.com.br/wp-content/uploads/2016/03/livro-azul_andrew-lang_CAPA_21_09_2017_FINAL_CURVAS-01.jpg" 
                    alt="Capa do livro" 
                    className = "book-image"
                />
                <h1 className = "book-title">{book.name}</h1> 
                <p className = "book-price">R${book.price.toFixed(2).replace(".", ",")}</p> 
            </div>
        });

        // Funções de paginação:
    function previousPage() {
        setCurrentPage(page => page - 1);
    };

    function nextPage() {
        setCurrentPage(page => page + 1);
    };
        //

    // Filtragem de livros por nome (input no header):

    const filterBooks = (e) => {
        const value = e.target.value;
        if(value !== '') {
            const filteredBooks = books.filter(book => {
                return book.name.toLowerCase().startsWith(value.toLowerCase());
            })
            setBooks(filteredBooks);
            setSearchBook(value);
        }
        return listBooks;
    };

    return (
        <C.Container>
            <Router>
                <Header filterBooks={filterBooks} />
                <Content 
                    listBooks={listBooks} 
                    previousPage={previousPage} 
                    nextPage={nextPage}
                    totalPages={totalPages}
                    currentPage={currentPage} />
            </Router>
        </C.Container>
    );
};

export default App;