import React from "react";
import { imgLink } from "./utils/content";

const RestaurantCard = ({ resData }) => {
  // console.log(resData, "data");

  return (
    <div>
      <div className="res_card">
        <img
          className="adj_res_card_img"
          width="250px"
          src={`${imgLink}${resData.info.cloudinaryImageId}`}
          alt={resData.info.name}
        />
        <h3>
          {resData.info.name.length > 23
            ? resData.info.name.slice(0, 24) + "..."
            : resData.info.name}
        </h3>
        <p>
          <strong>{resData.info.avgRating}</strong>
          &nbsp;&nbsp;{" ."}
          <strong>{resData.info.sla.deliveryTime} - mins</strong>
        </p>
        <p>
          {resData.info.cuisines.length > 3
            ? resData.info.cuisines.slice(0, 3)?.join(", ").length > 31
              ? resData.info.cuisines.slice(0, 3)?.join(", ").slice(0, 28) +
                "..."
              : resData.info.cuisines.slice(0, 3)?.join(", ") + ", ..."
            : resData.info.cuisines.join(", ")}
        </p>
        <p>{resData.info.costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
