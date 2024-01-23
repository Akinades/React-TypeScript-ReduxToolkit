import { Form, Select, Input } from "antd";
import { useTranslation } from "react-i18next";
const NameInput: React.FC = () => {
  const { t } = useTranslation();
  const nameTitleOption = [
    { value: "Mr", label: t("Mr.") },
    { value: "Mrs", label: t("Mrs.") },
    { value: "Ms", label: t("Ms.") },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
      <Form.Item
        label={t("Name Title")}
        name="nameTitle"
        rules={[{ required: true, message: "Please input your nameTitle!" }]}
      >
        <Select placeholder={t("Name Title") + "..."} style={{ width: 70 }}>
          {nameTitleOption.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={t("Firstname")}
        name="firstname"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input style={{ width: 330 }} />
      </Form.Item>
      <Form.Item
        label={t("Sirname")}
        name="sirname"
        rules={[{ required: true, message: "Please input your sirname!" }]}
      >
        <Input type="text" style={{ width: 330 }} />
      </Form.Item>
    </div>
  );
};

export default NameInput;
