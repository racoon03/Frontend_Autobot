import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { generatePublicRoutes, generatePrivateRoutes } from './routes';
import NotFoundPage from './layouts/404Page';
import { Spin, message } from 'antd';
import { useState, createContext, useContext, useEffect, useReducer } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { initialState, reducer } from './services/authReducer';
import type { AuthState } from './services/authReducer';
import { authService } from './services/authService';
import { LOGIN_SUCCESS, LOGOUT } from './services/authActions';

interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => useContext(AuthContext);

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
export const useLoading = () => useContext(LoadingContext);

const MessageContext = createContext<ReturnType<typeof message.useMessage>[0] | undefined>(undefined);
export const useMessage = () => useContext(MessageContext);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [antMessage, contextHolder] = message.useMessage();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: { user } });
    }
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (state.isAuthenticated) {
      /*
      authService.refreshToken()
        .then(() => { console.log("Token refreshed successfully"); })
        .catch((error: any) => { console.error("Error refreshing token on auth state change:", error); dispatch({ type: LOGOUT }); });
      */

      intervalId = setInterval(
        () => {
          if (authService.getCurrentUser()) {
            authService
              .refreshToken()
              .then(() => {
                console.log("Token refreshed successfully in interval");
              })
              .catch((error: any) => {
                console.error("Error refreshing token in interval:", error);
                dispatch({ type: LOGOUT });
              });
          } else {
            if (intervalId) clearInterval(intervalId);
          }
        },
        300000,
      );
    } else {
      if (intervalId) clearInterval(intervalId);
    }

    return () => { if (intervalId) clearInterval(intervalId); };

  }, [state.isAuthenticated]);

  return (  
    <MessageContext.Provider value={antMessage}>
      {contextHolder}
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <AuthContext.Provider value={{ state, dispatch }}>
          <Spin spinning={isLoading} fullscreen />
          <Router>
            <Routes>
              {generatePublicRoutes(state.isAuthenticated)}
              {generatePrivateRoutes(state.isAuthenticated)}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </AuthContext.Provider>
      </LoadingContext.Provider>
    </MessageContext.Provider>
  );
}

export default App
