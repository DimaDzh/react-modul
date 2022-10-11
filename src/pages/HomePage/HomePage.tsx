import React from "react";
import DeliveryWrapper from "../../components/DelivetySection/DeliveryWrapper";
import Catalog from "../../components/Main/Catalog/Catalog";
import MainContainer from "../../components/Main/Main";
import ProductCard from "../../components/Main/Product/ProductCard";
import SalesWrapper from "../../components/Main/Sales/SalesWrapper";
import SliderMain from "../../components/Main/Slider/SliderMain";

const HomePage = () => {
  return (
    <MainContainer>
      <SliderMain />
      <Catalog />
      <ProductCard />
      <SalesWrapper />
      <DeliveryWrapper title={"Оплата и доставка"} />
    </MainContainer>
  );
};

export default HomePage;
