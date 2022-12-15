import React from "react";

import "./workItem.css";

export const WorkItem = ({ itemID, itemVlaue, deleteItem }) => {
  return (
    <div class="mycard card text-center">
      <div class="card-header">To do list</div>
      <div class="card-body">
        <h5 class="card-title">mession number {itemID}</h5>
        <p class="card-text">{itemVlaue}</p>
        <a href="#" class="btn btn-primary" onClick={() => deleteItem(itemID)}>
          Done
        </a>
      </div>
    </div>
  );
};
