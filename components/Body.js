import React, { useEffect, useState } from "react";
import RestaurantCard, { WithOpen } from "./RestaurantCard";
import { restaurantsDataApi } from "./utils/content";
import ShimmerUi from "./ShimmerUi";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  const onlineStatus = useOnlineStatus();
  const RestaurantCardOpen = WithOpen(RestaurantCard);

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

  if (onlineStatus === false) {
    return <h1>Looks like Ur internet is broke..</h1>;
  }

  if (listOfRestaurants.length === 0) {
    console.log("first", listOfRestaurants.length);
    return <ShimmerUi />;
  }

  console.log(listOfRestaurants);

  return (
    <div className="body">
      <div className="px-4 pb-4">
        <input
          className="border-solid	border-2 rounded-md"
          type="search"
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
          value={searchtext}
        />
        <button
          className="mx-5 bg-blue-200 p-1 rounded-md"
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
          className="bg-blue-200 p-1 rounded-md"
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

      <div className="flex flex-wrap justify-between">
        {filterRestaurant.map((val) => {
          return (
            <div className="" key={val.info.id}>
              {/* if res is open then retirn opened card */}
              {val.info.isOpen ? (
                <RestaurantCardOpen resData={val} />
              ) : (
                <RestaurantCard resData={val} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
