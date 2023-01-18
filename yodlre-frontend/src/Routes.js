import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NewUserForm from "./NewUserForm";
import UserList from './UserList';


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
                <Route exact path="/users/manage">
                    <UserList/>
                </Route>
                <Route exact path="/users">
                    <UserList type="allUsers"/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    );

}

export default Routes;