"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var formik_1 = require("formik");
var Yup = require("yup");
var AppForm_1 = require("./Form/AppForm");
var AppFormField_1 = require("./Form/AppFormField");
var AppFormSubmitButton_1 = require("./Form/AppFormSubmitButton");
var AuthContext_1 = require("../../../../context/Auth/AuthContext");
var reqresApi_1 = require("../../../../api/reqresApi");
var ErrorCredentials_1 = require("./ErrorCredentials");
var validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Debe incluir al menos una minuscula')
        .matches(/\w*[A-Z]\w*/, 'Debe incluir al menos una mayuscula')
        .matches(/\d/, 'Password must have a number')
        .min(8, function (_a) {
        var min = _a.min;
        return "Password must be at least " + min + " characters";
    })
        .required('Password is required')
        .label('Password')
});
var LoginForm = function () {
    var _a = react_1.useContext(AuthContext_1["default"]), isLoggedIn = _a.isLoggedIn, login = _a.login;
    var _b = react_1.useState({ error: '', state: false }), asError = _b[0], setAsError = _b[1];
    var handleSubmit = react_1.useCallback(function (values) {
        try {
            reqresApi_1["default"]
                .post('/login', {
                email: values.email,
                password: values.password
            })
                .then(function (res) {
                console.log(res);
                login();
            })["catch"](function (err) {
                console.log(err.response);
                setAsError({ error: err, state: true });
            });
        }
        catch (error) {
            console.log(error);
        }
    }, []);
    if (asError.state)
        return (react_1["default"].createElement(ErrorCredentials_1["default"], { onFinish: function () { return setAsError({ error: '', state: false }); }, error: asError.error }));
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.Text, null, "Sign Up"),
        react_1["default"].createElement(AppForm_1["default"], { initialValues: {
                email: '',
                password: ''
            }, validationSchema: validationSchema, 
            /* AQUI TENGO LOS DATIOS */
            onSubmit: function (values) {
                handleSubmit(values);
            } },
            react_1["default"].createElement(formik_1.Field, { component: AppFormField_1["default"], name: "email", placeholder: "Email", autoCompleteType: "email", keyboardType: "email-address", textContentType: "emailAddress" }),
            react_1["default"].createElement(formik_1.Field, { component: AppFormField_1["default"], name: "password", placeholder: "Password", secureTextEntry: true, textContentType: "password" }),
            react_1["default"].createElement(AppFormSubmitButton_1["default"], { title: "Submit" }))));
};
exports["default"] = LoginForm;
