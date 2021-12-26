import React from "react";
import * as C from "./styles"

export const CustomerRegistration = () => {
    const blankSpaceHandle = (e) => {
        if (e.key === " ") {
          e.preventDefault();
        }
    };

    const handlePassword = (e) => {
        let password = document.getElementById("password").value;
        let passwordValid = document.getElementById("passwordValid").value;
        
        if(password !== passwordValid) {
            e.preventDefault();
            alert("Senhas não conferem!");
        }
    };

    return(
        <C.Form>
            <h1>Criar conta</h1>
            <fieldset className="input-container">
                <legend>Nome do usuário</legend>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Usuário"
                    onKeyDown={blankSpaceHandle} 
                    required 
                />
            </fieldset>
            <fieldset className="input-container">
                <legend>E-mail</legend>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="E-mail" 
                    onKeyDown={blankSpaceHandle}
                    required 
                />
            </fieldset>
            <fieldset className="input-container">
                <legend>Senha</legend>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Pelo menos 6 caracteres" 
                    minlength="6"
                    onKeyDown={blankSpaceHandle}
                    required
                />
            </fieldset>
            <fieldset className="input-container">
                <legend>Digite a senha novamente</legend>
                <input 
                    type="password" 
                    id="passwordValid" 
                    placeholder="Pelo menos 6 caracteres" 
                    minlength="6" 
                    onKeyDown={blankSpaceHandle}
                    required
                />
            </fieldset>
            <fieldset className="input-container">
                <input 
                    type="submit" 
                    value="Criar conta no Mercado Livro" 
                    class="submit-btn" 
                    onClick={handlePassword}
                />
            </fieldset>
        </C.Form>
    );
};