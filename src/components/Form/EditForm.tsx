import { Form, Card } from "antd";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData, updateFormData } from "../../store/formSlice";
import NameInput from "./NameInput";
import Birthday from "./Birthday";
import Identity from "./Identity";
import Phone_ID from "./Phone_ID";
import Salary from "./Salary";

const EditForm: React.FC<{ id: any }> = ({ id }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const dataInput = useSelector(selectFormData);

  useEffect(() => {
    console.log("dataInput:", dataInput);
    console.log("id:", id);

    if (id !== undefined) {
      const formData = dataInput.find((formItem) => formItem.id === id);
      console.log("formData:", formData);
      if (formData) {
        form.setFieldsValue(formData);
      }
    }
  }, [form, id, dataInput]);

  function handleSubmit() {
    const currentFormData = form.getFieldsValue();
    const updatedFormData = { ...currentFormData, id };

    const storedFormDataRaw = localStorage.getItem("formdata");
    const storedFormData =
      storedFormDataRaw !== null ? JSON.parse(storedFormDataRaw) : [];

    if (id !== null) {
      const indexOfUpdatedData = storedFormData.findIndex(
        (data: any) => data.id === id
      );

      if (indexOfUpdatedData !== -1) {
        storedFormData[indexOfUpdatedData] = updatedFormData;
      } else {
        storedFormData.push(updatedFormData);
      }

      localStorage.setItem("formdata", JSON.stringify(storedFormData));

      dispatch(updateFormData(updatedFormData));
      console.log(updatedFormData);
    }
  }

  function resetForm() {
    form.resetFields();
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
        <Form form={form} onFinish={handleSubmit}>
          <NameInput />
          <Birthday form={form} />
          <Identity />
          <Phone_ID />
          <Salary handleSubmit={handleSubmit} resetForm={resetForm} />
        </Form>
      </Card>
    </div>
  );
};

export default EditForm;
