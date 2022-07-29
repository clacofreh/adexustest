import React, {
  createContext,
  useReducer,
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';

interface AuthContextProps {
  login: () => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext({} as AuthContextProps);
//
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const reducer = (state: boolean, action: { type: string }) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, false);
  const login = useCallback(() => dispatch({ type: LOGIN }), [dispatch]);
  const logout = useCallback(() => dispatch({ type: LOGOUT }), [dispatch]);

  const AuthContextValue = useMemo(
    () => ({
      login,
      logout,
      isLoggedIn: state,
    }),
    [login, logout, state],
  );
  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
