import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Slider from "react-slick";

export const FeaturesProducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="h-auto font-nunito ">
      <div className="lg:p-10 p-3">
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
