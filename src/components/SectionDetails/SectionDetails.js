import React from "react";
import { LineInfo } from "../LineInfo/LineInfo";
import "./SectionDetails.css";
export const SectionDetails = (props) => {
  return (
    <div>
      <section>
        <h6>Personal Info</h6>
        <LineInfo label="Title" value={props.detail.name.title} />
        <LineInfo label="First name" value={props.detail.name.first} />
        <LineInfo label="Last name" value={props.detail.name.last} />
        <LineInfo label="Gender" value={props.detail.gender} />
        <LineInfo label="Age" value={props.detail.dob.age} />
      </section>

      <section>
        <h6>Address</h6>
        <LineInfo label="Street" value={props.detail.location.street.number} />
        <LineInfo label="city" value={props.detail.location.city} />
        <LineInfo label="state" value={props.detail.location.state} />
        <LineInfo label="postcode" value={props.detail.location.postcode} />
        <LineInfo label="phone" value={props.detail.phone} />
      </section>
    </div>
  );
};
