import React from 'react';
import './Workflow.css';

function Workflow() {
  return (
    <div className="workflow">
      <h2>--------------------------Workflow---------------------------</h2>
      <div className="workflow-buttons">
        <button className="workflow-button">1: Create Invoice</button>
        <button className="workflow-button">2: Ship Order</button>
        <button className="workflow-button">3: Receive Payment</button>
        <button className="workflow-button">4: Close Order</button>
      </div>
    </div>
  );
}

export default Workflow;
