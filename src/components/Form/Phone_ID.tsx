import { Form, Input, Select, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
const Phone_ID: React.FC = () => {
  const { t } = useTranslation();
  const spanStyle = { margin: "0 3px" };
  const telCodeOptions = [
    { value: "+1", label: t("+1 (USA)") },
    { value: "+44", label: t("+44 (UK)") },
    { value: "+81", label: t("+81 (JP)") },
    { value: "+66", label: t("+66 (TH)") },
  ];

  return (
    <Row gutter={0}>
      <Col span={6}>
        <Form.Item
          label={t("Phone Number")}
          name="phoneCode"
          rules={[{ required: true, message: "Please input your phoneCode!" }]}
        >
          <Select placeholder={t("Code") + "..."} style={{ width: "100%" }}>
            {telCodeOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={1}>
        <span
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            height: "50%",
          }}
        >
          -
        </span>
      </Col>
      <Col span={7}>
        <Form.Item name="phoneNumber">
          <Input style={{ borderRadius: "10px", width: "100%" }} />
        </Form.Item>
      </Col>
      <Col span={13}>
        <Form.Item label={t("Passport")} name="passport">
          <Input style={{ ...spanStyle, width: "70%" }} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default Phone_ID;
