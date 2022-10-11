import { Col, Divider, Row } from "antd";
import React from "react";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const ContentSection: React.FC = () => (
  <>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </>
);

export default ContentSection;
