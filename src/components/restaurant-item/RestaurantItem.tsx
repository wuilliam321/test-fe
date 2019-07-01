import React from "react";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";
import { debug } from "../../shared/utils";
import "./RestaurantItem.css";

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  debug("Rendering RestaurantItem Component");
  return (
    <div className="RestaurantItem">
      <div className="Restaurant-logo">
        <img
          alt={restaurant.name}
          src={`https://d1v73nxuzaqxgd.cloudfront.net/restaurants/${
            restaurant.logo
          }`}
        />
      </div>
      <div className="Restaurant-content">
        <div className="Restaurant-title">
          <a
            target={"_blank"}
            href={`http://www.pedidosya.com.uy/restaurantes/montevideo/${
              restaurant.link
            }-menu`}
          >
            {restaurant.name}
          </a>
          <span> ({restaurant.ratingScore} stars)</span>
        </div>
        <div className="Restaurant-details">
          Delivery: {restaurant.deliveryTimeMaxMinutes} minutes
          {restaurant.topCategories}
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
