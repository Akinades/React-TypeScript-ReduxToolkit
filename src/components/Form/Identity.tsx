import { Col, Form, Input, Radio, Row } from "antd";

import { useTranslation } from "react-i18next";

const Identity: React.FC = () => {
  const { t } = useTranslation();
  const inputStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "center",
  };
  const spanStyle = {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: "-25px",
  };

  return (
    <>
      <Row gutter={6} align="middle" justify="start">
        <Col>
          <span style={spanStyle}>เลขบัตรประชาชน :</span>
        </Col>
        <Col span={3}>
          <Form.Item name="pat1">
            <Input style={inputStyle} maxLength={1} autoFocus />
          </Form.Item>
        </Col>
        <Col>
          <span style={spanStyle}>-</span>
        </Col>
        <Col span={2}>
          <Form.Item name="pat2">
            <Input style={inputStyle} maxLength={4} />
          </Form.Item>
        </Col>
        <Col>
          <span style={spanStyle}>-</span>
        </Col>
        <Col span={2}>
          <Form.Item name="pat3">
            <Input style={inputStyle} maxLength={4} />
          </Form.Item>
        </Col>
        <Col>
          <span style={spanStyle}>-</span>
        </Col>
        <Col span={2}>
          <Form.Item name="pat4">
            <Input style={inputStyle} maxLength={3} />
          </Form.Item>
        </Col>
        <Col>
          <span style={spanStyle}>-</span>
        </Col>
        <Col span={1}>
          <Form.Item name="pat5">
            <Input style={inputStyle} maxLength={1} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label={t("Gender")}
        name="gender"
        rules={[{ required: true, message: "Please input your gender!" }]}
      >
        <Radio.Group>
          <Radio value="Male"> {t("Male")} </Radio>
          <Radio value="Female"> {t("Female")} </Radio>
          <Radio value="Undefined"> {t("Undefined")} </Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default Identity;
