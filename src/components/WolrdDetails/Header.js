import React from "react";

const Search = ({ countryData, Global, setSearch }) => {
  const date = new Date(Global?.Date);
  //extract exact data from object
  return (
    <div className="search">
      <div className="country-dropdown">
        <select
          onChange={(e) => setSearch(e.target.value)}
          className="country-dropdown-list"
        >
          <option className="country">All</option>
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
      {Global ? (
        <div className="total-covid-status">
          <button className="total-dropdown-button">Total</button>
          <table className="global-table">
            <tbody className="global-table-body">
              <hr />
              <tr className="global-table-data">
                <th>Today</th>
              </tr>
              <hr />
              <tr className="global-table-data">
                <th>Date</th>
                <td>{date.getDate()}/{date.getDay()}/{date.getFullYear()}</td>
              </tr>
              <tr className="global-table-data">
                <th>Confirmed</th>
                <td>{Global.NewConfirmed}</td>
              </tr>
              <tr className="global-table-data">
                <th>Deaths</th>
                <td>{Global.NewDeaths}</td>
              </tr>
              <tr className="global-table-data">
                <th>Recovered</th>
                <td>{Global.NewRecovered}</td>
              </tr>
              <hr />
              <tr className="global-table-data">
                <th>Total</th>
              </tr>
              <hr />
              <tr className="global-table-data">
                <th>Total Confirmed</th>
                <td>{Global.TotalConfirmed}</td>
              </tr>
              <tr className="global-table-data">
                <th>Total Death</th>
                <td>{Global.TotalDeaths}</td>
              </tr>
              <tr className="global-table-data">
                <th>Total Recovered</th>
                <td>{Global.TotalRecovered}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
