import React from "react";
import { imgLink } from "./utils/content";

const ItemList = ({ items }) => {
  //   console.log(items);

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className="flex justify-between p-2 m-2 border-b-2 border-black"
            key={item.card.info.id}
          >
            <div className="flex flex-col text-left w-9/12">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="text-sm font-bold">
                ₹{item.card.info.price / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12">
              <div className="absolute">
                <button className="bg-black w-14 mx-11 rounded-lg p-1 text-white">
                  Add+
                </button>
              </div>
              <img
                className="w-36 m-auto h-24 p-2 rounded-xl "
                src={`${imgLink}${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
