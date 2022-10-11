import { Card, Col, Row, Typography } from "antd";
import React, { FC } from "react";
import { catalogData } from "./catalogData";
import "./catalog.scss";
import { mainColor1 } from "../../variables/mainColors/mainColor1";

const { Title } = Typography;

const Catalog: FC = () => (
  <>
    <div className="catalog__wrapper">
      <Title level={3}>Новинки</Title>
      <Row gutter={16}>
        {catalogData.map((data) => {
          return (
            <Col span={6} key={data.id}>
              <Card bordered={true} size="small" hoverable>
                <div>
                  <img
                    src={data.image}
                    alt="pizza"
                    style={{
                      maxWidth: "70px",
                      maxHeight: "70px",
                      borderRadius: "12px",
                    }}
                  />
                </div>
                <span>{data.title}</span>{" "}
                <span style={mainColor1}>от {data.price} UAH</span>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  </>
);

export default Catalog;
