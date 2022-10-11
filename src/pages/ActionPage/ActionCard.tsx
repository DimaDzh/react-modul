import React from "react";
import { Card } from "antd";
import "./actionStyles.scss";
import CustomButton from "../../components/CustomisedBtn/CustButton";
import { custBtn } from "../../components/variables/mainColors/custBtn";

const ActionCardStyle = {};

const ActionCard: React.FC = () => {
  return (
    <div className="action__card">
      <Card className="body__style" bordered hoverable>
        <div className="card__img"></div>
        <h3>Дарим кибер-призы</h3>
        <p>
          Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от
          MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от
          Bite. А также станьте автоматическим участником розыгрыша игровых
          ключей и больших пицц 29 июня.
        </p>
        <CustomButton styles={custBtn}>Просмотреть</CustomButton>
      </Card>
    </div>
  );
};

export default ActionCard;
