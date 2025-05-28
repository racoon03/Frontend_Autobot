
//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
//import ServiceRates from './pages/Services_Rates';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import HomePage from './pages/Home';



function App() {
  //const [count, setCount] = useState(0)
  return (  
    <>

      <DefaultLayout> 
         <HomePage></HomePage>
      </DefaultLayout>

    </>

  )
}

export default App
