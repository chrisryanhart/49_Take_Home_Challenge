import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NewUserForm from "./NewUserForm";


function Routes(){

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/register">
                    <NewUserForm/>
                </Route>
                <Route exact path="/users">
                    
                </Route>
                <Route exact path="/users/:id">
                    
                </Route>
                <Route exact path="/users/manage">
                    
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    );

}

export default Routes;