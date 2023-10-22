import React, { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { imgLink } from "./utils/content";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(1);

  const hInfo = useRestaurantMenu(resId);

  if (hInfo === null) {
    return <ShimmerUi />;
  }

  const {
    name,
    avgRating,
    costForTwo,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = hInfo?.data?.cards[0]?.card?.card?.info;
  console.log(
    name,
    avgRating,
    costForTwo,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId
  );

  console.log(
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card
  );

  // filter resturant data from here

  let dataList =
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
      ?.card.itemCards ??
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards ??
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

  console.log(dataList);

  console.log(hInfo?.data?.cards[0]?.card?.card?.info);

  console.log(hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  let categories =
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) => {
        return val?.card?.card["@type"].includes(
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {avgRating} ₹{costForTwo / 100 || costForTwoMessage}- for two
        </p>
        <h2></h2>
        <h2>{cuisines.join(", ")}</h2>
        <img
          className="m-auto rounded-lg"
          width={"200px"}
          src={imgLink + cloudinaryImageId}
          alt=""
        />
        {categories.map((category, ind) => {
          return (
            <RestaurantCategory
              key={ind}
              data={category?.card?.card}
              showItems={ind === showIndex ? true : false}
              setShowIndex={() => setShowIndex(ind)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
