"use strict";
exports.__esModule = true;
exports.HomeScreen = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useUsers_1 = require("../hooks/useUsers");
var useAuthContext_1 = require("../hooks/useAuthContext");
var UserCard_1 = require("../components/UserCard");
exports.HomeScreen = function () {
    var _a = useUsers_1.useUsers(), userList = _a.userList, isLoading = _a.isLoading;
    var users = userList.users;
    var _b = useAuthContext_1.useAuthContext(), isLoggedIn = _b.isLoggedIn, logout = _b.logout;
    var memoizedUserList = react_1.useMemo(function () { return users; }, [users]);
    react_1.useEffect(function () {
        console.log(isLoggedIn, 'useAuthContext');
        console.log(userList, 'useUsers');
    }, []);
    return (react_1["default"].createElement(react_native_1.ScrollView, null,
        react_1["default"].createElement(react_native_1.Button, { title: "Logout", onPress: logout }),
        userList &&
            memoizedUserList.map(function (user) { return (react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' }, key: user.id },
                react_1["default"].createElement(UserCard_1["default"], { user: user }))); })));
};
