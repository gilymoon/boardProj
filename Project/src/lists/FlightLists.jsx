import React from "react";
import moment from "moment";

const FlightLists = ({ flights, direction }) => {
  return flights.map((flight) => {
    return (
      <div key={flight.ID} className="list">
        <span className="term">
          <span className={flight.term === "D" ? "term-blue" : "term-green"}>
            {flight.term}
          </span>
        </span>
        <span className="time">
          {moment(flight.timeToStand).format("HH:mm")}
        </span>
        <span className="destination">
          {direction === "arrivals"
            ? flight["airportFromID.city_en"]
            : flight["airportToID.city_en"]}
        </span>
        <span className="status">
          {direction === "arrivals"
            ? `Arrived ${moment(flight.timeLandFact).format("HH:mm")}`
            : `Departed at ${moment(flight.timeDepFact).format("HH:mm")}`}
        </span>
        <span className="airline">
          <img
            className="airline-logo"
            src={flight.airline.en.logoSmallName}
            alt="logo"
          />
          {flight.airline.en.name}
        </span>
        <span className="flight">
          {`${flight["carrierID.IATA"]}${flight.fltNo}`}
        </span>
      </div>
    );
  });
};

export default FlightLists;
