import React from "react";
import "./CountryWise.scss";
const Countrywise = ({ data, index }) => {
  // console.log(data);
  const {
    Country,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    CountryCode,
  } = data;
  const CountryFlag = "https://countryflagsapi.com/png/";
  return data ? (
    <div className="country-details">
      <div defaultActiveKey="1">
        <div eventKey={index}>
          <div>
            {index} {Country} {CountryCode}
          </div>
          <div>
            <table className="country-table">
              <tbody className="country-table-body">
                <tr className="country-table-image">
                  <td>
                    <img src={CountryFlag + CountryCode} alt="" />
                  </td>
                </tr>
                <tr className="country-table-data">
                  <th>Confirmed</th>
                  <td>{NewConfirmed}</td>
                </tr>
                <tr className="country-table-data">
                  <th>Deaths</th>
                  <td>{NewDeaths}</td>
                </tr>
                <tr className="country-table-data">
                  <th>Recovered</th>
                  <td>{NewRecovered}</td>
                </tr>
                <tr className="country-table-data">
                  <th>Total Confirmed</th>
                  <td>{TotalConfirmed}</td>
                </tr>
                <tr className="country-table-data">
                  <th>Total Death</th>
                  <td>{TotalDeaths}</td>
                </tr>
                <tr className="country-table-data">
                  <th>Total Recovered</th>
                  <td>{TotalRecovered}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Countrywise;
