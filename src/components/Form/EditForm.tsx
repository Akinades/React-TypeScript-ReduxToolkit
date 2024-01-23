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
        const { pat1, pat2, pat3, pat4, pat5 } = formData;
        const id_card = `${pat1 || ""}${pat2 || ""}${pat3 || ""}${pat4 || ""}${
          pat5 || ""
        }`;

        form.setFieldsValue({
          ...(pat1 !== undefined && { pat1 }),
          ...(pat2 !== undefined && { pat2 }),
          ...(pat3 !== undefined && { pat3 }),
          ...(pat4 !== undefined && { pat4 }),
          ...(pat5 !== undefined && { pat5 }),
          id_card,
          ...(formData?.birthday !== undefined && {
            birthday: formData.birthday,
          }),
          ...formData,
        });
      }
    }
  }, [form, id, dataInput]);

  function handleSubmit() {
    const currentFormData = form.getFieldsValue();
    const updatedFormData = { ...currentFormData, id };
    dispatch(updateFormData(updatedFormData));
    localStorage.setItem("formdata", JSON.stringify([updatedFormData]));
    console.log(updatedFormData);
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
