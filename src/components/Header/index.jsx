import { React } from "react";
import * as C from "./styles";
import logo from "../../assets/mercado_livro_logo.png";
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <C.Header>
            <Link to="/">
                <img 
                    src={logo} 
                    className="logo" 
                    alt="Logo do Mercado Livro representado por uma ilustração de um livro branco aberto e um fundo azul" 
                />
            </Link>
            <input
                type="search" 
                value={undefined}
                placeholder="Pesquisar livro"
                className="search-bar" 
                onChange={props.filterBooks}
            />
            <nav>
                <Link to="/cadastro" className="btn-registrate">
                    Cadastre-se
                </Link>
                <Link to="/login" className="btn-login">
                    Faça seu login
                </Link>
            </nav>
        </C.Header>
    );
};