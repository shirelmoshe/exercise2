import React, { useState } from "react";
import { AddWorkItem } from "../addWorkItem/addWorkItem";
import { WorkItem } from "../workItem/workItem";

export const TodoList = () => {
  const [Item, setItem] = useState([]);

  let addNewMession = (newValue) => {
    let newList = {
      id: Item.length + 1,
      value: newValue,
    };
    setItem((prev) => [...prev, newList]);
  };
  let deleteMession = (ID) => {
    let messionArray = Item.filter((f) => {
      return f.id !== ID;
    });
    setItem(
      messionArray.sort((a, b) => {
        return a - b;
      })
    );
  };
  return (
    <>
      <AddWorkItem newMession={addNewMession}></AddWorkItem>
      {Item &&
        Item.map((m) => {
          return (
            <WorkItem
              itemID={m.id}
              itemVlaue={m.value}
              deleteItem={deleteMession}
            ></WorkItem>
          );
        })}
    </>
  );
};
