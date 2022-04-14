import { Form, Input, Modal, Button } from "antd";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { create } from "../lib/api";
import { UserListType } from "../lib/interfaces";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  modalType: string;
}

const CreateUserModal = ({
  isModalVisible,
  setIsModalVisible,
  modalType,
}: Props) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: UserListType) => {
    create(values)
      .then((res) => {
        handleCancel();
        form.resetFields();
      })
      .catch((err) => {
        throw err;
      });
  };

  //   useEffect(() => {
  //     if (modalType === "modify") {
  //       form.setFieldsValue({});
  //     }
  //   }, []);
  // 수정 로직

  return (
    <UserModal
      title={`이해관계자 ${modalType === "add" ? "추가" : "수정"}하기`}
      visible={isModalVisible}
      width={"70%"}
      centered
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        form={form}
        size="large"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Form.Item
          colon={false}
          label="이름"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          colon={false}
          label="소속"
          name="company"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          colon={false}
          label="이메일"
          name="email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          colon={false}
          label="직함"
          name="jobTitle"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 18 }}>
          <ButtonWrapper>
            <Button htmlType="button" onClick={handleCancel}>
              닫기
            </Button>
            <Button type="primary" htmlType="submit">
              확인
            </Button>
          </ButtonWrapper>
        </Form.Item>
      </Form>
    </UserModal>
  );
};

const UserModal = styled(Modal)`
  .ant-modal-title {
    font-family: "Noto Sans KR", sans-serif;
  }

  .ant-modal-body {
    background-color: #f8f8f8;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export default CreateUserModal;
