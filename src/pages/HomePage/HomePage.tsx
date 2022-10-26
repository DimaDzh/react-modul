import { FC } from "react";
import DeliveryWrapper from "../../components/DelivetySection/DeliveryWrapper";
import Catalog from "../../components/Main/Catalog/Catalog";
import MainContainer from "../../components/Main/Main";
import ProductCard from "../../components/Main/Product/ProductCard";
import SalesWrapper from "../../components/Main/Sales/SalesWrapper";
import SliderMain from "../../components/Main/Slider/SliderMain";
import { useAuth } from "../../hooks/useAuth";
import { selectProducts } from "../../store/slices/useProductsSlice";
import { useAppSelector } from "../../hooks/redux-hooks";

import { Row } from "antd";

interface IHomePageProps {
  handleClick?: () => void;
  handleChange?: () => void;
}

const HomePage: FC<IHomePageProps> = ({}) => {
  const { isAuth } = useAuth();
  const { products } = useAppSelector(selectProducts);

  return (
    <>
      <MainContainer>
        {isAuth && <SliderMain />}
        {isAuth && <Catalog />}
        <Row justify="space-between" gutter={[16, 24]}>
          {products &&
            products.map((item: any) => {
              return (
                <ProductCard
                  id={item.id}
                  title={item.title}
                  key={item.id}
                  image={item.image}
                  btnTitle={"В корзину"}
                  price={item.price}
                  description={item.description}
                  amount={item.amount}
                  product={item}
                />
              );
            })}
        </Row>

        {isAuth && <SalesWrapper />}
        {isAuth && <DeliveryWrapper title={"Оплата и доставка"} />}
      </MainContainer>
    </>
  );
};

export default HomePage;
