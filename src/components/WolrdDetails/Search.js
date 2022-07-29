import React from "react";

const Search = ({ countryData, Global, setSearch }) => {
  //extract exact data from object
  let date = "";
  let newConfirmed = "";
  let newDeaths = "";
  let newRecovered = "";
  let totalConfirmed = "";
  let totalDeaths = "";
  let totalRecovered = "";
  if (Global) {
    const {
      Date,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
    } = Global;
    date = Date;
    newConfirmed = NewConfirmed;
    totalConfirmed = TotalConfirmed;
    newDeaths = NewDeaths;
    newRecovered = NewRecovered;
    totalConfirmed = TotalConfirmed;
    totalDeaths = TotalDeaths;
    totalRecovered = TotalRecovered;
  }
  //extract exact data from object
  return (
    <div className="search">
      <div className="country-dropdown">
        <select
          onChange={(e) => setSearch(e.target.value)}
          className="country-dropdown-list"
        >
          <option>All</option>
          {countryData
            ? countryData.map((data, index) => {
                const { Country } = data;
                return (
                  <option className="country" key={index} value={Country}>
                    {Country}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
      <div className="total-covid-status">
        <button className="total-dropdown-button">Total</button>
        <table className="global-table">
          <tbody className="global-table-body">
            <tr className="global-table-data">
              <th>Date</th>
              <td>{date}</td>
            </tr>
            <tr className="global-table-data">
              <th>Confirmed</th>
              <td>{newConfirmed}</td>
            </tr>
            <tr className="global-table-data">
              <th>Deaths</th>
              <td>{newDeaths}</td>
            </tr>
            <tr className="global-table-data">
              <th>Recovered</th>
              <td>{newRecovered}</td>
            </tr>
            <tr className="global-table-data">
              <th>Total Confirmed</th>
              <td>{totalConfirmed}</td>
            </tr>
            <tr className="global-table-data">
              <th>Total Death</th>
              <td>{totalDeaths}</td>
            </tr>
            <tr className="global-table-data">
              <th>Total Recovered</th>
              <td>{totalRecovered}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
