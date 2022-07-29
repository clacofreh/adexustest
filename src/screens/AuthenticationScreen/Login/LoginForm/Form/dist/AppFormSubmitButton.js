"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var formik_1 = require("formik");
var AppFormSubmitButton = function (_a) {
    var title = _a.title;
    var _b = formik_1.useFormikContext(), handleSubmit = _b.handleSubmit, isValid = _b.isValid;
    return react_1["default"].createElement(react_native_1.Button, { onPress: handleSubmit, title: title, disabled: !isValid });
};
exports["default"] = AppFormSubmitButton;
