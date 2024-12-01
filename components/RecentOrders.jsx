

import React, { useState } from "react";
import "./RecentOrders.css";
import "./CustomScrollbar.css"; // Import the custom scrollbar styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { LuFilterX } from "react-icons/lu";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CustomStyles.css';

function RecentOrders() {
  const [filter, setFilter] = useState("Order Date");
  const numbers = Array.from({ length: 12}, (_, i) => i + 1); // Array of numbers

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <h3 className="recent-orders-heading">Recent Orders</h3>
<div className="overflow-auto" style={{ maxHeight: '603px', border: '1px solid #ccc' }}>
      <div className="recent-orders">
        <div className="recent-orders-container">
         

            <div className="container">                        

              <div className="filter-bar-container">
                <div className="radio-group">
                  <div className="filter-bar">
                    <label>
                      Filter-by: Order Date
                      <input
                        type="radio"
                        name="filter"
                        value="Order Date"
                        checked={filter === "Order Date"}
                        onChange={() => handleFilterChange("Order Date")}
                      />
                    </label>
                    <label>
                      Modified Date
                      <input
                        type="radio"
                        name="filter"
                        value="Modified Date"
                        checked={filter === "Modified Date"}
                        onChange={() => handleFilterChange("Modified Date")}
                      />
                    </label>
                    <label>
                      Customer
                      <input
                        type="radio"
                        name="filter"
                        value="Customer"
                        checked={filter === "Customer"}
                        onChange={() => handleFilterChange("Customer")}
                      />
                    </label>
                    <label>
                      Employee
                      <input
                        type="radio"
                        name="filter"
                        value="Employee"
                        checked={filter === "Employee"}
                        onChange={() => handleFilterChange("Employee")}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Wrapping table in CustomScrollbar */}

            <table className="order-table">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee</th>
                  <th>Customer</th>
                  <th>Order Date</th>
                  <th>Order Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {numbers.map((num) => (
                  <tr key={num}>
                    <td className="number">{num}</td>
                    <td>Ali Bhai</td>
                    <td>Adatum Corporation</td>
                    <td>9/12/2024</td>
                    <td>N/A</td>
                    <td>New</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

          

          <div
            className="search-bar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              padding: "2px 0px",
              margin: "2px 0px",
              height: "25px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              background: "#fff",
            }}
          >
            <button
              style={{
                display: "flex",
                width: "630px",
                border: "1px solid rgb(162 154 154)",
                height: "27px",
                alignItems: "centre",
                background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)", // Gradient for half-gray background

              }}>
              <div
                style={{
                  display: "flex",
                  height: "30px",
                  alignItems: "center",
                  gap: "0px", // Adds spacing between the elements
                }}
              >

                <button
                  style={{
                    marginLeft: "-6px",
                    marginBottom: "5px",
                    height: "27px",
                    color: "#474444",
                    cursor: "pointer",
                    borderRadius: "0px",
                    border: "1px solid rgb(162 154 154)",

                    transition: "all 0.3s ease",
                    background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)", // Gradient for half-gray background
                  }}
                >
                  Record: |
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    style={{ verticalAlign: "middle", marginLeft: "5px" }}
                  />
                  &nbsp;
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    style={{ color: "gray", verticalAlign: "middle" }}
                  />
                </button>


                <button
                  style={{
                    width: "76px",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid rgb(162 154 154)",


                    marginBottom: "7px",
                    height: "26px",
                    paddingLeft: "2px",
                    paddingRight: "24px"

                  }}>
                  <span style={{ fontSize: "15px" }}>1 of 20</span>
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    marginLeft: "-8px",
                    marginBottom: "3px",
                    height: "26px",
                    marginTop: "-7px",
                    color: "#474444",
                    backgroundcolor: "#3b3838",
                    cursor: "pointer",
                    background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)", // Gradient for half-gray background
                    border: "1px solid rgb(162 154 154)",
                  }}
                >
                  <button style={{
                    height: "14px",
                    marginTop: "-4px",
                    marginBottom: "7px",
                    border: "1px solid rgb(204, 204, 204)",
                    marginLeft: "-5px",
                    background: "linear-gradient(to top, #E7E8EC 50%, transparent 50%)", // Gradient for half-gray background
                    border: "gray"

                  }}>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      style={{ color: "gray", verticalAlign: "middle", marginRight: "5px" }}
                    />
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      style={{ color: "black", verticalAlign: "middle" }}
                    />

                    |&nbsp;
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      style={{ color: "gray", verticalAlign: "middle", marginRight: "5px" }}
                    />
                  </button>
                  <LuFilterX
                    style={{
                      height: "29px",
                      width: "22px",
                      verticalAlign: "middle",
                      marginRight: "5px",
                    }}
                  />
                  No Filter
                </button>
                <button style={{
                  height: "25px",
                  color: "#464643",
                  marginTop: " 0px",
                  width: "90",
                  paddingRight: "40px",
                  marginLeft: "-5px",
                  marginBottom: "8px",
                  border: "1px solid rgb(162 154 154)",

                  paddingBottom: "5px",
                  backgroundColor: "rgba (255, 255, 255)",
                  fontSize: "13px"
                }}>

                  Search
                </button>

              </div>
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "320px",
                height: "30px",
                marginRight:"-2px",
                borderRadius: "3px",
                backgroundColor: "#f1f1f1",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Left Icon */}
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 5px",
                }}
                onClick={() => {
                  const container = document.getElementById("scrollable-container");
                  container.scrollBy({ left: -50, behavior: "smooth" });
                }}
              >
                &#9664; {/* Left arrow */}
              </button>

              {/* Scrollable Content */}
              <div
                id="scrollable-container"
                style={{
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflowX: "auto",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "3px", // Add border radius
                  scrollbarWidth: "thin", // Make scrollbar thinner (for Firefox)
                  overflow: "hidden",
                }}
              >
                {/* Scrollbar styling for webkit browsers */}
                <style>
                  {`
      #scrollable-container::-webkit-scrollbar {
        height: 6px; /* Adjust scrollbar height */
      }
      #scrollable-container::-webkit-scrollbar-thumb {
        background-color: #ccc; /* Scrollbar color */
        border-radius: 3px; /* Add border radius */
      }
      #scrollable-container::-webkit-scrollbar-track {
        background: #f1f1f1; /* Scrollbar track color */
      }
    `}
                </style>
                {/* Add an empty line */}
                <div style={{ borderBottom: "11px solid #717171", width: "100%", borderRadius: "6px", height: "2px" }}></div>
              </div>

              {/* Right Icon */}
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 5px",
                }}
                onClick={() => {
                  const container = document.getElementById("scrollable-container");
                  container.scrollBy({ left: 50, behavior: "smooth" });
                }}
              >
                &#9654; {/* Right arrow */}
              </button>
            </div>



          </div>


        </div>
      </div >
    </div >

  );
}

export default RecentOrders;