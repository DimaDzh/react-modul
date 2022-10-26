import { Divider, Card, Col, Row, Typography, Image } from "antd";
import { FC } from "react";
import { IProducts } from "../../../store/slices/useCartSlice";
import AddToCartButton from "../../Cart/assets/Buttons/AddToCartButton";

const { Title, Text } = Typography;
const { Meta } = Card;

const ProductCard: FC<IProducts> = ({
  id,
  image,
  title,
  description,
  price,
  product,
}) => (
  <>
    <Col
      xs={{ span: 24, offset: 1 }}
      md={{ span: 12, offset: 0 }}
      lg={{ span: 6, offset: 0 }}
      key={id}
    >
      <Card hoverable bordered>
        <Image width={200} height={150} src={image} alt="pizza"></Image>

        <Title level={5} style={{ paddingBottom: "18px" }}>
          {title}
        </Title>
        <Text type="secondary">{description}</Text>
        <Divider />
        <Row justify="space-between" align="middle">
          <Col>
            {" "}
            <Text> {price} UAH </Text>
          </Col>
          <Col>
            <AddToCartButton product={product} />
          </Col>
        </Row>
      </Card>
    </Col>
  </>
);
export default ProductCard;
