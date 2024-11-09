import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Order from './components/OrderPage.jsx'
import OrderSuccess from './components/OrderPlaced.jsx';
import OrderFailure from './components/OrderError.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [orderStatus, setOrderStatus] = useState(null);
  

  return (
    <>
      {currentPage === "home" ? (
        <Home navOrder={() => setCurrentPage("order")} />
      ) : orderStatus === 'success' ? (
        <OrderSuccess />
      ) : orderStatus === 'error' ? (
        <OrderFailure />
      ) : (
        <Order setOrderStatus={setOrderStatus} />
      )}
      <Footer/>
    </>
  );
}

export default App;
