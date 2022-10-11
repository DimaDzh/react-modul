import {
  Avatar,
  Divider,
  Card,
  Col,
  Row,
  Typography,
  Button,
  Space,
  Image,
} from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";
import React, { FC } from "react";
import CustomButton from "../../CustomisedBtn/CustButton";
import { custBtn } from "../../variables/mainColors/custBtn";
import { mainColor1 } from "../../variables/mainColors/mainColor1";
import { data } from "../data/data";

const { Title, Text } = Typography;
const { Meta } = Card;
const styleCard: React.CSSProperties = {
  display: "flex",
};
const ProductCard: FC = () => (
  <>
    <Row align="middle" justify="space-between" gutter={8}>
      {data.map((product) => {
        return (
          <Col
            xs={{ span: 24, offset: 1 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            key={product.id}
          >
            <Card hoverable bordered>
              <Image
                width={200}
                height={150}
                src={product.image}
                alt="pizza"
              ></Image>

              <Title level={5} style={{ paddingBottom: "18px" }}>
                {product.title}
              </Title>
              <Text type="secondary">{product.description}</Text>
              <Divider />
              <Row justify="space-between" align="middle">
                <Col>
                  {" "}
                  <Text> {product.price} UAH </Text>
                </Col>
                <Col>
                  <CustomButton type="primary" shape="round" styles={custBtn}>
                    В корзину
                  </CustomButton>
                  {/* <Button
                    type="primary"
                    shape="round"
                    className="addToCard__btn"
                  >
                    В корзину
                  </Button> */}
                </Col>
              </Row>
            </Card>
          </Col>
        );
      })}
    </Row>
  </>
);

export default ProductCard;
