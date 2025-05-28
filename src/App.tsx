//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { generatePublicRoutes, generatePrivateRoutes } from './routes';
import NotFoundPage from './layouts/404Page';
import { Spin, message } from 'antd';
import { useState, createContext, useContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

// Create loading context with default value
const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

// Create message context
const MessageContext = createContext<ReturnType<typeof message.useMessage>[0] | null>(null);

export const useMessage = () => useContext(MessageContext);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [antMessage, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider value={antMessage}>
      {contextHolder}
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Spin spinning={isLoading} fullscreen />
        <Router>
          <Routes>
            {generatePublicRoutes(false)}
            {generatePrivateRoutes(false)}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </LoadingContext.Provider>
    </MessageContext.Provider>
  );
}

export default App
