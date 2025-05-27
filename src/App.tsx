//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import TradingBotHeader from './layouts/Header';
import TradingBotFooter from './layouts/Footer';
//import NotFoundPage from './layouts/404Page';
import './App.css'
//import ServiceRates from './pages/Services_Rates';
import ExtensionPage from './pages/Download_Extension';



function App() {
  //const [count, setCount] = useState(0)

  return (  
    <>
      <TradingBotHeader />
      <ExtensionPage />
      <TradingBotFooter/>
    </>
    // <NotFoundPage />
    //<ServiceRates/>
  )
}

export default App
