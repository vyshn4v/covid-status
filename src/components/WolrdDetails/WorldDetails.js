import React, { useEffect, useState } from "react";
import "./WorldDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../loading/Loading";
import {
  fetchWorldDataAsync,
  removeWorldDataAsync,
} from "../../features/world/WorldSlice";
import Countrywise from "../countrywise/Countrywise";
import Search from "./Search";

const WorldDetails = () => {
  //search state
  const [search, setSearch] = useState("All");

  //fetching data from api
  const dispatch = useDispatch();
  const worldData = useSelector((state) => state.world.world);
  const countryData = worldData["Countries"];
  useEffect(() => {
    dispatch(fetchWorldDataAsync());
    dispatch(removeWorldDataAsync());
  }, [dispatch]);
  //fetching data from api

  
  return (
    <div className="global">
      <Search
        countryData={countryData}
        setSearch={setSearch}
        Global={worldData["Global"]}
      />
      <div className="country-wise">
        {countryData ? (
          countryData.map((data, index) => {
            const { Country } = data;
            // console.log(search.toUpperCase());
            return (
              <Countrywise
                data={
                  search === "All"
                    ? data
                    : search.toUpperCase() === Country.toUpperCase()
                    ? data
                    : ""
                }
                key={index}
                index={
                  !search ? index : search === Country.toUpperCase() ? index : ""
                }
              />
            );
          })
        ) : (
          <Loading/>
        )}
      </div>
    </div>
  );
};

export default WorldDetails;
