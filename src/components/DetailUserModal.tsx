import { Modal } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

const DetailUserModal = ({ isModalVisible, setIsModalVisible }: Props) => {
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
    ></UserModal>
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

export default DetailUserModal;
