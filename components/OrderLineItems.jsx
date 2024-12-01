import React, { useState } from 'react';
import './OrderLineItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { LuFilterX } from "react-icons/lu";
function OrderLineItems() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h5 className="order-line-items-heading">Order Line Items</h5>
      <div className="order-line-items">
        <table>
          <thead>
            <tr>
              <th className="empty-header"></th>
              <th className="product-header">Product</th>
              <th className="quantity-header">Quantity</th>
              <th className="unit-price-header">Unit Price</th>
              <th className="price-header">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div class="btn-group dropend">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  
                </button>
                <ul class="dropdown-menu">

                </ul>
              </div>
              <td>
                <div className="input-select-box">
                  <input type="text" placeholder="" className="product-input" />
                  <select className="product-options">
                    <option value=""></option>
                    <option value="Product1">Product 1</option>
                    <option value="Product2">Product 2</option>
                  </select>
                </div>
              </td>
              <td className="quantity-cell">
                <input type="text" className="quantity-input" />
              </td>
              <td><input type="number" placeholder="" className="unit-price-input" /></td>
              <td><input type="text" placeholder="" className="price-input" /></td>
            </tr>
          </tbody>
        </table>

        <div className="total-price">
          <span>Total Price</span>
          <input type="text" />
        </div>

        {/* Search bar and button positioned below total price */}
        <div className="search-bar-1" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "2px",
          width: "617px",
          background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)",
          backgroundColor: "#F4F5F7",
          border: "1px solid #ccc",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          height: "22px",

        }}>
          <button style={{
            fontSize: "14px",
            padding: "5px 10px",
            background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)",
            border: "1px solid #ccc",
            color: "#474444",
            height: "26px",
            cursor: "pointer",
          }}>
            Record: |
            <FontAwesomeIcon
              icon={faCaretLeft}
              style={{ verticalAlign: "middle", marginLeft: "5px" }}
            /> &nbsp;
            <FontAwesomeIcon
              icon={faCaretLeft}
              style={{ color: "gray", verticalAlign: "middle" }}
            />
          </button>
          <button style={{
            border: "gray"
          }}>


            <span style={{ marginLeft: "10px", fontSize: "14px", color: "#000", marginRight: "10px" }}>1 of 1</span>
          </button>
          <button style={{
            fontSize: "14px",
            padding: "5px 10px",
            background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)",
            border: "1px solid #ccc",
            marginRight: "5px",
            height: "26px",
            color: "#474444",
            cursor: "pointer",
          }}>
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{ color: "gray", verticalAlign: "middle", marginRight: "5px" }}
            /> &nbsp;
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{ color: "black", verticalAlign: "middle", marginRight: "5px" }}
            /> | &nbsp;
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{ color: "gray", verticalAlign: "middle" }}
            />

            <LuFilterX style={{
              height: "20px",
              width: "22px",
              verticalAlign: "middle",
              marginLeft: "10px",
            }} /> No Filter
          </button>

          <button style={{
            padding: "5px 15px",
            paddingLeft: "0px",
            fontSize: "13px",
            color: "#000",
            border: "1px solid #ccc",
            paddingRight: "40px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
          }}>
            Search
          </button>
        </div>



      </div>
    </div>
  );
}

export default OrderLineItems;
