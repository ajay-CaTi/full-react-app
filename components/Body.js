import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsDataApi } from "./utils/content";
import ShimmerUi from "./ShimmerUi";

// console.log(resObj);

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${restaurantsDataApi}`);
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    console.log("first", listOfRestaurants.length);
    return <ShimmerUi />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
          value={searchtext}
        />
        <button
          onClick={() => {
            let searchData = listOfRestaurants.filter((val) => {
              console.log(val.info.name.includes(searchtext));
              return val.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase());
            });
            setFilterRestaurant(searchData);
          }}
        >
          Search
        </button>
        <button
          className="top_restaurants"
          onClick={() => {
            const filterTopRes = listOfRestaurants.filter(
              (val) => val.info.avgRating > 4.3
            );
            setFilterRestaurant(filterTopRes);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="res_card_container">
        {filterRestaurant.map((val) => {
          return (
            <div key={val.info.id}>
              <RestaurantCard resData={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
