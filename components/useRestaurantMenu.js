import { useEffect, useState } from "react";
import { resApi } from "./utils/content";

const useRestaurantMenu = (resId) => {
  const [hInfo, setHInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${resApi}${resId}`);
    const json = await data.json();
    console.log(json);
    setHInfo(json);
  };

  return hInfo;
};

export default useRestaurantMenu;
