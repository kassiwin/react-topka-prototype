import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {StorageKey, Urls} from "./../data";

export default function PrivateRoute({component: Component, exact = true, ...rest}) {
    const isUserAuthenticated = !!sessionStorage.getItem(StorageKey.str_userToken);

    return (
        <Route
            exact
            {...rest}
            render={function (props) {
                if (isUserAuthenticated) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={Urls.auth.signin}/>
                }
            }}
        />
    );
}
