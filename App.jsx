import React from 'react';
import './App.css';
import Workflow from './components/Workflow';
import RecentOrders from './components/RecentOrders';
import OrderForm from './components/OrderForm';
import OrderLineItems from './components/OrderLineItems';

function App() {
  return (
    <div className="app-container">
      <header>
        <h className="header-item">Add Order</h>
        <h className="header-item right">Delete Order</h>
        
      </header>   
      <div className="main-content">
        <div className="form-section">
           {/* New container for Workflow and OrderLineItems */}
          <Workflow />
          <OrderForm/>
         <OrderLineItems/>
          
        </div>
        <RecentOrders/>
        </div>
          {/* Separate section */}
      
      
      
    </div>
  );
}

export default App;
