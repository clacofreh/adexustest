"use strict";
exports.__esModule = true;
var React = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var screens_1 = require("../screens");
var LoggedInNavigation = native_stack_1.createNativeStackNavigator();
var LoggedOutNavigationStack = function () {
    return (React.createElement(LoggedInNavigation.Navigator, null,
        React.createElement(LoggedInNavigation.Screen, { name: "Home", component: screens_1.HomeScreen }),
        React.createElement(LoggedInNavigation.Screen, { name: "Profile", component: screens_1.ProfileScreen })));
};
exports["default"] = LoggedOutNavigationStack;
