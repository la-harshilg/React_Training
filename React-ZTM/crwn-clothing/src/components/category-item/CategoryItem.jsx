import React from "react";
import "./CategoryItem.scss";

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
