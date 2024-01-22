import { DatePicker, Form, Select, Space, FormInstance } from "antd";
import { useTranslation } from "react-i18next";

interface BirthdayProps {
  form: FormInstance;
}
const Birthday: React.FC<BirthdayProps> = ({ form }) => {
  const { t } = useTranslation();
  const nationalityOption = [
    { value: "Thai", label: t("Thai") },
    { value: "England", label: t("England") },
    { value: "Lao", label: t("Lao") },
    { value: "China", label: t("China") },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
      <Form.Item
        label={t("Birthday")}
        name="birthday"
        rules={[{ required: true, message: "Please input your birthday!" }]}
      >
        <Space direction="vertical">
          <DatePicker
            placeholder={t("MM/DD/YYYY")}
            format="MM/DD/YYYY"
            onChange={(date) => {
              form.setFieldsValue({
                birthday: date?.format("MM/DD/YYYY"),
              });
            }}
          />
        </Space>
      </Form.Item>
      <Form.Item
        label={t("Nationality")}
        name="nationality"
        rules={[{ required: true }]}
      >
        <Select placeholder={t("--Select--")} style={{ width: 300 }}>
          {nationalityOption.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};
export default Birthday;
