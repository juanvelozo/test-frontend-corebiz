import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Slider from "react-slick";

export const FeaturesProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div className="container-md h-auto font-nunito p-10 ">
      <div>
        <h1 className="font-bold text-xl ">Más vendidos</h1>
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    </div>
  );
};
