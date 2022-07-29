"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const Navigation_1 = __importDefault(require("./src/navigation/Navigation"));
const AuthContext_1 = require("./src/context/Auth/AuthContext");
const AppState = ({ children }) => {
    return <AuthContext_1.AuthContextProvider>{children}</AuthContext_1.AuthContextProvider>;
};
const App = () => {
    return (<native_1.NavigationContainer>
      <react_native_1.StatusBar hidden/>
      <AppState>
        <Navigation_1.default />
      </AppState>
    </native_1.NavigationContainer>);
};
exports.default = App;