import { Button, Form, Input, Space } from "antd";
import { useTranslation } from "react-i18next";
interface SalaryProps {
  handleSubmit: () => void;
  resetForm: () => void;
}

const Salary: React.FC<SalaryProps> = ({ handleSubmit, resetForm }) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Form.Item
        label={t("Expected salary")}
        name="salary"
        rules={[{ required: true, message: "Please input your salary!" }]}
      >
        <Input style={{ width: 330 }} />
      </Form.Item>
      <Space>
        <Button style={{ marginRight: "10px" }} onClick={resetForm}>
          {t("Clear")}
        </Button>
        <Button htmlType="submit" onClick={handleSubmit}>
          {t("Submit")}
        </Button>
      </Space>
    </div>
  );
};

export default Salary;
