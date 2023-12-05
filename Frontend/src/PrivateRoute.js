import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthService from "./auth/AuthService";

const PrivateRoute = ({ element: Element, allowedRoles, ...rest }) => {
    const currentUser = AuthService.getCurrentUserToken();
    const userRole = currentUser ? currentUser.role : "guest";

    if (!currentUser || (allowedRoles && !allowedRoles.includes(userRole))) {
        return <Navigate to="/login" />;
    }

    return (
        <Route {...rest} element={<Element />} />
)
};

export default PrivateRoute;
