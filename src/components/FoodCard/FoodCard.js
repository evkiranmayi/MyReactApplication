import React from "react";
import "./FoodCard.css";
import delivery from "../../assets/delivery.svg";

const FoodCard = ({ title, description, image, price }) => {
  return (
    <div className="foodCard">
      <div className="foodCard-image">
        <img src={image} alt="food" height={200}></img>
      </div>
      <div className="foodCard-body">
        <div className="foodCard-body-header">
          <div className="foodCard-body-title-header">
            <p className="foodCard-title">{title}</p>
            <p className="foodCard-price">{price}</p>
          </div>
          <p className="foodCard-description">{description}</p>
        </div>

        <div className="foodCard-delivery">
          <p className="foodCard-delivery-title">Order a delivery</p>
          <img src={delivery} alt="uber eats"></img>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;