import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { FeaturesProducts } from "../components/FeaturedProducts/FeaturesProducts";

export const Home = () => {
  return (
    <div className="h-height w-auto">
      <Carousel />

      <FeaturesProducts />
    </div>
  );
};
