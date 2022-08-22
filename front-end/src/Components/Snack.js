import React from "react";
import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";

const Snack = ({ snack }) => {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
      
        <span>
        <img src={snack.image} alt={snack.is_healthy ? "healthy food" : "unhealthy food"} width='200px' height='200px' />
        </span>
        <br />
        <h4>
        
          {snack.is_healthy ? (
            <img src={heartSolid} alt="healthy food"  width='50px' height='50px'/>
          ) : (
            <img src={heartRegular} alt="unhealthy food"  width='50px' height='50px'/>
          )}
          {snack.name}</h4>
        
      </Link>
    </div>
  );
};

export default Snack;
