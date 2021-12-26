import React from "react";
import { Books } from "../../views/Books";
import { CustomerRegistration } from "../../views/CustomerRegistration";
import { Login } from "../../views/Login";
import { NotFound } from "../../views/NotFound";
import { Switch, Route } from "react-router-dom";

export const Content = (props) => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Books 
                        listBooks={props.listBooks} 
                        previousPage={props.previousPage} 
                        nextPage={props.nextPage}
                        totalPages={props.totalPages}
                        currentPage={props.currentPage} />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/cadastro">
                    <CustomerRegistration />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </>
    );
};