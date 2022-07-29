"use strict";
exports.__esModule = true;
var React = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var LoggedOutNavigation_1 = require("./LoggedOutNavigation");
var LoggedInNavigationStack_1 = require("./LoggedInNavigationStack");
var useAuthContext_1 = require("../hooks/useAuthContext");
var Stack = native_stack_1.createNativeStackNavigator();
var Navigation = function () {
    var isLoggedIn = useAuthContext_1.useAuthContext().isLoggedIn;
    return isLoggedIn ? (React.createElement(LoggedInNavigationStack_1["default"], null)) : (React.createElement(LoggedOutNavigation_1["default"], null));
};
exports["default"] = Navigation;
