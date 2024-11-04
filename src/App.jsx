import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Order from './components/OrderPage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Order/>
    </>
  )
}

export default App
