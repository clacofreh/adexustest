"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ProfileScreen = function (_a) {
    var route = _a.route, navigation = _a.navigation;
    var user = route.params;
    react_1.useEffect(function () {
        console.log(user);
    }, [user]);
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.Text, null, user.id),
        react_1["default"].createElement(react_native_1.Text, null, user.first_name),
        react_1["default"].createElement(react_native_1.Text, null, user.last_name),
        react_1["default"].createElement(react_native_1.Text, null, user.email)));
};
exports["default"] = ProfileScreen;
