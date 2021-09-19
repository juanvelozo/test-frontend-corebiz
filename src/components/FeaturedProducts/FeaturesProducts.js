import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Slider from "react-slick";

export const FeaturesProducts = ({ product }) => {
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
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="h-auto font-nunito ">
      <div className="lg:p-10 p-4">
        <h1 className="font-bold text-xl ">Más vendidos</h1>
        <Slider {...settings}>
          {product.map((product) => {
            return <ProductCard key={product.productId} data={product} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
