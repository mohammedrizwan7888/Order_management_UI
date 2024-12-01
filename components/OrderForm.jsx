import React from 'react';
import './OrderForm.css';

function OrderForm() {
  return (
    <div className="order-form">
      <div className="form-row space-between">
        <label>Order ID (New)</label>
        <label className="right-aligned-1">Order Date</label>
      </div>

      <div className="form-row">
        <label>Customer</label>
        <div className="input-group">
          <input type="text" placeholder="" />
          <select>
            <option value=""></option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <label>Shipped Date</label>
      </div>

      <div className="form-row">
        <label>Employee</label>
        <div className="input-group">
          <input type="text" placeholder="" />
          <select>
            <option value=""></option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <label>Paid Date</label>


      </div>
      <div>
        <label className="">Notes</label> 
        <label className="right-aligned-2">Order Status</label>
       
      </div>
      <div className="form-row space-between">

 

      </div>
      <div className="form-row notes" >
       
        <textarea placeholder=""></textarea>
      </div>
    </div>
  );
}

export default OrderForm;
