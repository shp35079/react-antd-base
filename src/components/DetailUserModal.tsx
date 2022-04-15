import { Descriptions, Modal } from "antd";
import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import styled from "styled-components";
import { getUser, UserDispatchContext, UserStateContext } from "../contexts";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

const DetailUserModal = ({ isModalVisible, setIsModalVisible }: Props) => {
  const { targetId, user } = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  useEffect(() => {
    getUser(dispatch, targetId);
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <UserModal
      title={"이해관계자 정보"}
      visible={isModalVisible}
      width={"70%"}
      centered
      onCancel={handleCancel}
      footer={null}
    >
      <Descriptions column={1} bordered>
        <Descriptions.Item label="이름">{user.name}</Descriptions.Item>
        <Descriptions.Item label="소속">{user.company}</Descriptions.Item>
        <Descriptions.Item label="이메일">{user.email}</Descriptions.Item>
        <Descriptions.Item label="직함">{user.jobTitle}</Descriptions.Item>
      </Descriptions>
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

  td {
    background-color: #fff;
  }
`;

export default DetailUserModal;
