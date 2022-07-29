import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStatewiseAsync,
  removeStatewiseAsync,
} from "../../features/stateWise/StateSlice";
import { Link } from "react-router-dom";
import "./StateDetails.scss";
import { Loading } from "../loading/Loading";
const StateDetails = () => {
  //fecthing data from api using redux toolkit
  const dispatch = useDispatch();
  const stateWise = useSelector((state) => state.stateWise.stateWise);
  useEffect(() => {
    dispatch(fetchStatewiseAsync());
    return () => dispatch(removeStatewiseAsync());
  }, [dispatch]);
  //fecthing data from api using redux toolkit
  //keys from data
  const key = Object.keys(stateWise);
  console.log(key.length);
  //keys from data

  return key.length !== 0 ? (
    <div className="statedetails-main">
      <h3 as="h5">India</h3>
      <div className="state-container">
        {key.map((data, index) => {
          const stateCode = stateWise[`${data}`].statecode;
          console.log(stateCode);
          return data !== "State Unassigned" ? (
            <div className="state-details" key={index}>
              <div className="state-name">
                <h1>
                  {index}-{data}
                </h1>
              </div>
              <div className="state-code">
                <h1>{stateCode}</h1>
              </div>
              <Link to={data}>
                <button className="StateDetails-button">Details</button>
              </Link>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StateDetails;
