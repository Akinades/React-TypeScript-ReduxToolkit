import React, { useState } from "react";
import { Button, Checkbox, Modal, Space, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFormData,
  deleteAllFormData,
  deleteFormData,
} from "../../store/formSlice";

import EditForm from "./EditForm";
import { useTranslation } from "react-i18next";
interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  nationality: string;
  telcode: string;
}

const TableData: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<React.Key | undefined>();
  const dataInput = useSelector(selectFormData);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const start = () => {
    dispatch(deleteAllFormData());
  };
  const columns: TableColumnsType<DataType> = [
    {
      title: t("Name"),
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: t("Gender"),
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: t("Phone Number"),
      dataIndex: "telcode",
      sorter: (a, b) => a.telcode.length - b.telcode.length,
    },

    {
      title: t("Nationality"),
      dataIndex: "nationality",
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: t("Manage"),
      dataIndex: "manage",
    },
  ];
  const data: DataType[] = dataInput.map((formItem) => ({
    key: formItem.id,
    name: `${formItem.firstname} ${formItem.sirname}`,
    gender: t(`${formItem.gender}`),
    telcode: `${formItem.phoneCode + formItem.phoneNumber}`,
    nationality: t(`${formItem.nationality}`),
    manage: (
      <Space>
        <Button
          type="primary"
          onClick={() => handleEdit(formItem.id)}
          style={{ backgroundColor: "green", color: "white" }}
        >
          {t("Edit")}
        </Button>
        <Button type="primary" onClick={() => handleDelete(formItem.id)} danger>
          {t("Delete")}
        </Button>
      </Space>
    ),
  }));
  const showModal = (id: React.Key) => {
    setIsModalOpen(true);
    setEditingId(id);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (id: React.Key) => {
    showModal(id);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteFormData(id));
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSelectAll = (e: any) => {
    const allKeys = dataInput.map((formItem) => formItem.id);
    setSelectedRowKeys(e.target.checked ? allKeys : []);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
      >
        <EditForm id={editingId} />
      </Modal>
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: "170px",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          <Checkbox
            style={{ display: "flex", alignItems: "center" }}
            onChange={handleSelectAll}
          >
            {t("Get All")}
          </Checkbox>
          <Button type="default" onClick={start}>
            {t("Delete")}
          </Button>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            {`Selected ${selectedRowKeys.length} items`}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </>
  );
};

export default TableData;
