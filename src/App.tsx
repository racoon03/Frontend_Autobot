//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
//import ServiceRates from './pages/Services_Rates';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';


function App() {
  //const [count, setCount] = useState(0)
  return (  
    <>
      <DefaultLayout> 
         <About></About>
      </DefaultLayout>
    </>

    // <NotFoundPage />
    //<ServiceRates/>
  )
}

export default App
