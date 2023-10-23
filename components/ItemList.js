import React from "react";
import { addItem } from "./utils/cartSlice";
import { imgLink } from "./utils/content";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    // inide addIem is payload
    dispatch(addItem(item));
  };

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
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="w-3/12">
              <div className="absolute">
                <button
                  onClick={() => handleAddItem(item)}
                  className="bg-black w-14 mx-11 rounded-lg p-1 text-white"
                >
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
