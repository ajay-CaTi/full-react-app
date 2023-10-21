import React, { useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { imgLink } from "./utils/content";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

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

  // here

  let dataList =
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
      ?.card.itemCards ??
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards ??
    hInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

  console.log(dataList);

  console.log(hInfo?.data?.cards[0]?.card?.card?.info);

  // let items = resInfo.filter((val) => {
  //   return val?.card?.card["@type"].includes(
  //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  // });

  console.log(hInfo);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Our Menu U find something Tasty</h1>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{avgRating}</h2>
        <h2>{costForTwo / 100 || costForTwoMessage}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <img width={"200px"} src={imgLink + cloudinaryImageId} alt="" />
        {dataList.map((item) => {
          return (
            <h3 key={item.card.info.id}>
              {item.card.info.name} -{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
