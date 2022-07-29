"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LoginForm_1 = require("./LoginForm/LoginForm");
var Login = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, width: '100%' } },
        react_1["default"].createElement(react_native_1.View, { style: styles.formContainer },
            react_1["default"].createElement(LoginForm_1["default"], null))));
};
exports["default"] = Login;
var styles = react_native_1.StyleSheet.create({
    logoContainer: {
        flex: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: 15
    },
    formContainer: {
        flex: 50
    }
});
