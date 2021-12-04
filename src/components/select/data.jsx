import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import content from "../../../content/pricing-form.yaml"

const countries = [
  {
    value: "1",
    label: content.plans[0].title,
    flag: `${content.plans[0].fa}`
  },
  {
    value: "2",
    label: content.plans[1].title,
    flag: `${content.plans[1].fa}`
  },
  {
    value: "3",
    label: content.plans[2].title,
    flag: `${content.plans[2].fa}`
  },
];

export const updatedCountries = countries.map((item) => {
  item.label = (
    <div className="label">
      <span>{item.label}</span>
      <i className="fa"><FontAwesomeIcon icon={ item.flag } /></i>
    </div>
  );
  return item;
});
