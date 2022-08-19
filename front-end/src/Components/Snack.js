import React from "react";
import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";

const Snack = ({ snack }) => {
  return (
    <div>
      <Link to={`/snacks/${snack.id}`}>
        <span>
          <img src={snack.image} alt={snack.name} />
        </span>
        <br />
        <span>
          {snack.is_healthy ? (
            <img src={heartSolid} alt="" />
          ) : (
            <img src={heartRegular} alt="" />
          )}
          <h4>{snack.name}</h4>
        </span>
      </Link>
    </div>
  );
};

export default Snack;
