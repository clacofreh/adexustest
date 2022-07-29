"use strict";
exports.__esModule = true;
var React = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var screens_1 = require("../screens");
var LoggedOutNavigation = native_stack_1.createNativeStackNavigator();
var LoggedOutNavigationStack = function () {
    return (React.createElement(LoggedOutNavigation.Navigator, null,
        React.createElement(LoggedOutNavigation.Screen, { name: "Auth", component: screens_1.AuthenticationScreen })));
};
exports["default"] = LoggedOutNavigationStack;
