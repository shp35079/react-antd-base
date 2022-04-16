import { Form, Input, Modal, Button, message } from "antd";
import { Rule } from "antd/lib/form";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import styled from "styled-components";
import { FORM_ITEM_INFO } from "../constances";
import {
  createUser,
  updateUser,
  UserDispatchContext,
  UserStateContext,
} from "../contexts";
import { UserListType } from "../lib/interfaces";

interface FetchUserModalProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  modalType: string;
}

const FetchUserModal = ({
  isModalVisible,
  setIsModalVisible,
  modalType,
}: FetchUserModalProps) => {
  const [form] = Form.useForm();
  const { user } = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    if (modalType === "update") {
      form.setFieldsValue(user);
    }
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
    if (modalType === "add") form.resetFields();
    else form.setFieldsValue(user);
  };

  const onFinish = (values: UserListType) => {
    if (modalType === "add") {
      createUser(dispatch, values)
        .then(() => {
          setIsModalVisible(false);
          message.success("유저가 성공적으로 추가되었습니다.");
          form.resetFields();
        })
        .catch((err) => {
          throw err;
        });
    } else {
      updateUser(dispatch, values)
        .then(() => {
          setIsModalVisible(false);
          message.success("유저가 성공적으로 수정되었습니다.");
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  return (
    <UserModal
      title={`이해관계자 ${modalType === "add" ? "추가" : "수정"}하기`}
      visible={isModalVisible}
      width={"70%"}
      centered
      onCancel={handleCancel}
      footer={null}
      forceRender
    >
      <Form
        form={form}
        size="large"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        {FORM_ITEM_INFO.map((item) => {
          const { name, label, rules } = item;
          return (
            <Form.Item
              key={name}
              colon={false}
              label={label}
              name={name}
              rules={rules as Rule[]}
            >
              <Input />
            </Form.Item>
          );
        })}
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

export default FetchUserModal;
