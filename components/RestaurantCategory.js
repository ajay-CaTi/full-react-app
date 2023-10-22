import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;
  return (
    <div className="w-3/4 cursor-pointer  bg-gray-200 shadow-lg m-auto  rounded-lg">
      {/* header  */}
      <div
        onClick={() => {
          console.log("click");
          setShowIndex();
        }}
        className=" p-4 flex justify-between m-2 font-bold"
      >
        <span>
          {title} ({itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* acc body  */}
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
