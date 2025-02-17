import React from "react";
import { data } from "../Mock/Data";

const Card = () => {
  return (
    <div className="cards">
      {data.map(({ id, img, name, brand, smell }) => {
        return (
          <div className="card" key={id}> 
            <img src={img} className="card-img" />
            <div className="card-content">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{brand}</p>
              <button className="card-btn">Learn More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
