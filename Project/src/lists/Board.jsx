import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import moment from "moment";
import * as flightActions from "./flight.actions";
import { connect } from "react-redux";
import { flightListSelector } from "./flight.selector.js";
import qs from "qs";
import FlightLists from "./FlightLists";

function Board({ getFlightList, flights }) {
  useEffect(() => {
    const formatDate = moment(new Date()).format("DD-MM-YYYY");

    getFlightList(formatDate);
  }, []);
  const { direction } = useParams();

  const { search } = useLocation();
  const flightsList =
    flights[direction === "arrivals" ? "arrival" : "departure"] || [];
  const filterText = qs.parse(search, { ignoreQueryPrefix: true }).search;
  const filteredFlights = filterText
    ? flightsList.filter((flight) =>
        flight.codeShareData[0].codeShare
          .toLowerCase()
          .includes(filterText.toLowerCase())
      )
    : flightsList;

  return (
    <>
      <div className="routes">
        <Link
          className="routes__departure-link"
          to={search.length > 8 ? `/departures${search}` : `/departures`}
        >
          <button
            className={
              direction === "departures"
                ? "routes__departure_selected"
                : "routes__departure"
            }
          >
            <i className="medium material-icons btn-icons">flight_takeoff</i>
            DEPARTURES
          </button>
        </Link>

        <Link
          className="routes__arrival-link"
          to={search.length > 8 ? `/arrivals${search}` : `/arrivals`}
        >
          <button
            className={
              direction === "arrivals"
                ? "routes__arrival_selected"
                : "routes__arrival"
            }
          >
            <i className="medium material-icons btn-icons">flight_land</i>
            ARRIVALS
          </button>
        </Link>
      </div>
      <div className="flights-data">
        <div className="details">
          <div className="detail-child">Terminal</div>
          <div className="detail-child">Local time</div>
          <div className="detail-child">Destination</div>
          <div className="detail-child">Status</div>
          <div className="detail-child">Airline</div>
          <div className="detail-child">Flight</div>
        </div>
        <FlightLists direction={direction} flights={filteredFlights} />
      </div>
    </>
  );
}
const mapState = (state) => {
  return {
    flights: flightListSelector(state),
  };
};

const mapDispatch = {
  getFlightList: flightActions.getFlightList,
};

export default connect(mapState, mapDispatch)(Board);
