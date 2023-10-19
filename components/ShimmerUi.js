import React from "react";

const ShimmerUi = () => {
  return (
    <div className="shimmer">
      <div className="body">
        <div className="search">
          <input type="search" />
          <button>Search</button>
        </div>
        <div className="res_card_container">
          <div className="res_card_shi"></div>
          <div className="res_card_shi"></div>
          <div className="res_card_shi"></div>
          <div className="res_card_shi"></div>
          <div className="res_card_shi"></div>
          <div className="res_card_shi"></div>
          <div className="res_card_shi"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUi;
