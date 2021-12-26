import React from "react";
import * as C from "../CustomerRegistration/styles";

export const Login = () => {
    const blankSpaceHandle = (e) => {
        if (e.key === " ") {
          e.preventDefault();
        }
    };

    return(
        <C.Form>
            <h1>Fazer login</h1>
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
                <legend>Senha</legend>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Senha" 
                    minlength="6"
                    onKeyDown={blankSpaceHandle}
                    required
                />
            </fieldset>
            <fieldset className="input-container">
                <input 
                    type="submit" 
                    value="Fazer login" 
                    class="submit-btn"
                />
            </fieldset>
        </C.Form>
    );
}