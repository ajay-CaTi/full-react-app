import React from "react";
import { imgLink } from "./utils/content";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  // console.log(resData, 'resData')
  const{resData}=data;
  return (
    <Link className="border rounded-md" to={`restaurant/${resData.info.id}`}>
      <div className="delay-300 hover:bg-yellow-200  w-60 border-gray-950  rounded-md m-2 bg-slate-200 p-1 ">
        <img
          className="rounded-lg h-56"
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
    </Link>
  );
};

// Higher Order Component

export const WithOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="relative top-10 left-5 rounded-md p-1 bg-black text-white">Open</label>
        <RestaurantCard data={...props} />
      </div>
    );
  };
};

export default RestaurantCard;
