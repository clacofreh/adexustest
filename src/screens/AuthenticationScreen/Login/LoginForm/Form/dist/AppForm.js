"use strict";
exports.__esModule = true;
var react_1 = require("react");
var formik_1 = require("formik");
var AppForm = function (_a) {
    var initialValues = _a.initialValues, onSubmit = _a.onSubmit, validationSchema = _a.validationSchema, children = _a.children;
    return (react_1["default"].createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit, validationSchema: validationSchema }, function () { return react_1["default"].createElement(react_1["default"].Fragment, null, children); }));
};
exports["default"] = AppForm;
