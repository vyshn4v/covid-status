import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchDistrictWiseAsync,
  removeWorldWiseAsync,
} from "../../features/stateWise/StateSlice";
import { Loading } from "../loading/Loading";
import "./DistrictDetails.scss";
const DistrictDetails = () => {
  const { data } = useParams();
  const dispatch = useDispatch();
  const districtWise = useSelector((state) => state.districtWise.districtWise);
  // console.log(districtWise);
  const district = Object.keys(districtWise);
  useEffect(() => {
    dispatch(fetchDistrictWiseAsync(data));
    dispatch(removeWorldWiseAsync());
  }, [dispatch, data]);
  return district.length !== 0 ? (
    <>
      <div className="districtwise">
        <h3 className="green">green-less than 2000</h3>
        <h3 className="red">red-2000-4000</h3>
        <h3 className="yellow">yellow-more than 4000</h3>
      </div>
      <div className="district-details">
        {district.map((data, index) => {
          const active = districtWise[`${data}`].active;
          const confirmed = districtWise[`${data}`].confirmed;
          const deceased = districtWise[`${data}`].deceased;
          const recovered = districtWise[`${data}`].recovered;
          const red = "#890000";
          const yellow = "#ebeb00";
          let ba =
            confirmed <= 2000 ? "green" : confirmed <= 4000 ? yellow : red;
          return data === "Other State" ? (
            ""
          ) : data === "Unknown" ? (
            ""
          ) : (
            <div
              key={index}
              style={{
                width: "18rem",
                backgroundColor: `${ba}`,
                color: `${ba === "#ebeb00" ? "black" : ""}`,
              }}
              className="district-status-box"
            >
              <h1>{data}</h1>
              <div>
                <h2>active : {active}</h2>
                <h3>confirmed:{confirmed}</h3>
                <h3>deceased:{deceased}</h3>
                <h3>recovered:{recovered}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default DistrictDetails;
