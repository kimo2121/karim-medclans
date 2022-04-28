import React from "react";
import "./styles.css";
import { ReactComponent as Cross } from "../../assets/Icons/hospital_icon.svg";
import { ReactComponent as Scope } from "../../assets/Icons/stethescope_icon.svg";
import { ReactComponent as Umbrella } from "../../assets/Icons/umbrella_icon.svg";
import { ReactComponent as Star } from "../../assets/Icons/selected_star.svg";
import { ReactComponent as Location } from "../../assets/Icons/location_icon.svg";
import bill from "../../assets/bill.jfif";

const HospitalCard = () => {
  return (
    <div className="hospital-card">
      <h2>Hip replacement heart surge heart heart surge heart...</h2>
      <div className="card-top">
        <div className="card-top-left">
          <div>
            <Cross />
            <p>New York-Presbyteriann Queens Hospital of ... </p>
          </div>
          <div>
            <Scope />
            <p>Dr. Robert Rabinokitz Williams Rober Rabino...</p>
          </div>
          <div>
            <Umbrella />
            <p>Blue cross blue shield</p>
          </div>
        </div>
        <img src={bill} alt="" />
      </div>
      <div className="card-divider"></div>
      <div className="card-bottom">
        <div className="card-bottom-first">
          <p>Total</p>
          <h2>Not provided by the facility</h2>
          <span>Out of pocket</span>
          <span>$4,000</span>
        </div>
        <div className="card-bottom-first">
          <p>Billing services</p>
          <div>
            <Star />
            <h3>3.5</h3>
          </div>
        </div>
        <div className="card-bottom-last">
          <Location />
          <p>Dallas-Fortworth area, North Carolina </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
