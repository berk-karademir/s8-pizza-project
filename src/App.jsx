import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Order from './components/OrderPage.jsx'
import OrderSuccess from './components/OrderPlaced.jsx';
import OrderFailure from './components/OrderError.jsx';
import { useState } from 'react';

function App() {

  const [orderStatus, setOrderStatus] = useState(null)

  return (
    <>
      {orderStatus === 'success' ? (
        <OrderSuccess />
      ) : orderStatus === 'error' ? (
        <OrderFailure />
      ) : (
        <Order setOrderStatus={setOrderStatus} />
      )}
    </>
  );
}

export default App
