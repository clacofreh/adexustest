"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var UserCard = function (_a) {
    var user = _a.user;
    var navigation = native_1.useNavigation();
    var uri = "" + user.avatar;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return navigation.navigate('Profile', user); } },
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: 'gray',
                marginVertical: 10,
                alignItems: 'center',
                width: 350,
                borderRadius: 5
            } },
            react_1["default"].createElement(react_native_1.View, { style: {
                    flexDirection: 'row',
                    flex: 1
                } },
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                    react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                        react_1["default"].createElement(react_native_1.Text, { style: { marginHorizontal: 3 } }, user.first_name),
                        react_1["default"].createElement(react_native_1.Text, null, user.last_name))),
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } }, uri && (react_1["default"].createElement(react_native_1.Image, { source: { uri: uri }, style: {
                        width: 150,
                        height: 150,
                        borderRadius: 5,
                        alignSelf: 'flex-end'
                    } })))))));
};
exports["default"] = UserCard;
