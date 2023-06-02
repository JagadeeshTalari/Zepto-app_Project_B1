import React from "react";
import { Link } from "react-router-dom";

function ExploreByCategories({ exploreByCategories }) {
  return (
    <div>
      <Link to="/fruits&veg">
        <img src={exploreByCategories[0].imagePath} alt="" />
      </Link>

      <h3>Explore By Categories</h3>

      {exploreByCategories.map((category) => {
        return (
          <Link key={category.id} to={category.routePath}>
            <img src={category.imagePath} alt="" />
          </Link>
        );
      })}
    </div>
  );
}

export default ExploreByCategories;
