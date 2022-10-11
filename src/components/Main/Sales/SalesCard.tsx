import React from "react";
import { Image, Col, Divider, Row } from "antd";
import "./salesStyle.scss";

function SalesCard() {
  return (
    <div className="card__section">
      <Row gutter={[16, 24]} justify="space-between" className="sales__wrapper">
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 6, offset: 1 }}
          lg={{ span: 12, offset: 0 }}
        >
          <Image
            width={540}
            height={405}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={12}>
          <Row wrap gutter={[16, 24]}>
            <Col
              xs={{ span: 24, offset: 4 }}
              md={{ span: 6, offset: 1 }}
              lg={{ span: 12, offset: 0 }}
            >
              <Image
                width={255}
                height={190}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col
              xs={{ span: 24, offset: 4 }}
              md={{ span: 6, offset: 1 }}
              lg={{ span: 12, offset: 0 }}
            >
              <Image
                width={255}
                height={190}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col
              xs={{ span: 24, offset: 4 }}
              md={{ span: 6, offset: 1 }}
              lg={{ span: 12, offset: 0 }}
            >
              <Image
                width={255}
                height={190}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col
              xs={{ span: 24, offset: 4 }}
              md={{ span: 6, offset: 1 }}
              lg={{ span: 12, offset: 0 }}
            >
              <Image
                width={255}
                height={190}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SalesCard;
