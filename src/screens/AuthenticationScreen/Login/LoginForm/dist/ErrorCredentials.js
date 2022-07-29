"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var ErrorCredentials = function (_a) {
    var onFinish = _a.onFinish, error = _a.error;
    return (react_1["default"].createElement(react_native_1.Modal, { animationType: "fade", transparent: true },
        react_1["default"].createElement(react_native_1.View, { style: {
                width: '50%',
                backgroundColor: 'lightgray',
                height: '50%',
                marginTop: 100,
                alignSelf: 'center',
                borderRadius: 10
            } },
            react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                react_1["default"].createElement(react_native_1.Text, null, " " + error.response.data.error + " "),
                react_1["default"].createElement(react_native_1.Button, { onPress: onFinish, title: "close" })))));
};
exports["default"] = ErrorCredentials;
