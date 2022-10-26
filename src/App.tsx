import React from "react";
import { Typography } from "antd";
import "./App.scss";
import Head from "./components/Header/Head";
import FooterSetion from "./components/Footer/FooterSection";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ActionPage from "./pages/ActionPage/ActionPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import CartPage from "../src/pages/CartPage/CartPage";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const { Title, Text } = Typography;

const App: React.FC = () => {
  return (
    <div className="App container">
      <Head />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actions" element={<ActionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <FooterSetion />
    </div>
  );
};

export default App;
