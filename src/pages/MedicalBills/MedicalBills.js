import React from "react";
import Search from "../../components/Search/Search";
import "./styles.css";
import HospitalCard from "../../components/HospitalCard/HospitalCard";

const MedicalBills = () => {
  return (
    <div className="medical-bills">
      <h1>Medical bills posted by the community</h1>
      <Search />
      <div className="cards-container">
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
      </div>
      <button className="loadmore">Load more</button>
    </div>
  );
};

export default MedicalBills;
