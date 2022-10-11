import React from "react";
import { Layout, Button, Typography } from "antd";
import "./App.scss";
import Head from "./components/Header/Head";
import FooterSetion from "./components/Footer/FooterSection";
import ContentSection from "./components/Main/Content/ContentSection";
import MainContainer from "./components/Main/Main";
import SliderMain from "./components/Main/Slider/SliderMain";
import Catalog from "./components/Main/Catalog/Catalog";
import ProductCard from "./components/Main/Product/ProductCard";
import SalesWrapper from "./components/Main/Sales/SalesWrapper";
import SalesCard from "./components/Main/Sales/SalesCard";
import DeliveryWrapper from "./components/DelivetySection/DeliveryWrapper";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ActionPage from "./pages/ActionPage/ActionPage";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const { Title, Text } = Typography;

const App: React.FC = () => {
  return (
    <div className="App container">
      <Head />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actions" element={<ActionPage />} />
      </Routes>
      <FooterSetion />
    </div>
  );
};

export default App;
