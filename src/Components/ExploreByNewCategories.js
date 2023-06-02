import React from "react";

function ExploreByNewCategories({ exploreNewCategories }) {
  return (
    <div>
      <h3>Explore By New Categories</h3>
      {exploreNewCategories.map((newCategory) => {
        return <img src={newCategory.imagePath} alt="" />;
      })}
    </div>
  );
}

export default ExploreByNewCategories;
