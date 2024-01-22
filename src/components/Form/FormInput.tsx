import { Form, Card } from "antd";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setFormData } from "../../store/formSlice";
import NameInput from "./NameInput";
import Birthday from "./Birthday";
import Identity from "./Identity";
import Phone_ID from "./Phone_ID";
import Salary from "./Salary";

const FormInput: React.FC = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  function resetForm() {
    form.resetFields();
  }
  function onFinish(values: Record<string, string | number>) {
    const id = uuidv4();
    const formData = { ...values, id };
    const existingFormData = JSON.parse(
      localStorage.getItem("formdata") || "[]"
    );
    const createFormData = [...existingFormData, formData];
    dispatch(setFormData(createFormData));
    localStorage.setItem("formdata", JSON.stringify(createFormData));
    form.resetFields();
    console.log("Form values:", formData);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          background: "transparent",
          border: "1px solid black",
          maxWidth: "100%",
        }}
      >
        <Form form={form} onFinish={onFinish}>
          <NameInput />
          <Birthday form={form} />
          <Identity />
          <Phone_ID />
          <Salary handleSubmit={() => onFinish} resetForm={resetForm} />
        </Form>
      </Card>
    </div>
  );
};

export default FormInput;
