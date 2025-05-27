//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import TradingBotHeader from './layouts/Header';
import TradingBotFooter from './layouts/Footer';
import TradingBotInfo from './layouts/Infomation';
//import NotFoundPage from './layouts/404Page';
import './App.css'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <TradingBotHeader />
      <TradingBotInfo/>
      <TradingBotFooter />
      {/* <NotFoundPage /> */}
    </>
  )
}

export default App
