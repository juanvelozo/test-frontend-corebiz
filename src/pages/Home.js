import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { FeaturesProducts } from "../components/FeaturedProducts/FeaturesProducts";

export const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axios
      .get(`https://corebiz-test.herokuapp.com/api/v1/products`)
      .then((resp) => {
        const data = resp.data;
        setProduct(data);
        return data;
      });
  };
  return (
    <div className="h-height w-auto">
      <Carousel />
      <FeaturesProducts product={product} />
    </div>
  );
};
