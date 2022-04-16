import React, { useState, Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import FetchUserModal from "./FetchUserModal";
import DetailUserModal from "./DetailUserModal";
import { message, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { deleteUser, UserDispatchContext, UserStateContext } from "../contexts";

interface PopoverContentProps {
  setIsPopoverVisible: Dispatch<SetStateAction<boolean>>;
}

const PopoverContent = ({ setIsPopoverVisible }: PopoverContentProps) => {
  const [isDeatilModalVisible, setIsDeatilModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const { user } = useContext(UserStateContext);
  const dispatch = useContext(UserDispatchContext);

  const openDetailModal = () => {
    setIsPopoverVisible(false);
    setIsDeatilModalVisible(true);
  };

  const openUpdateModal = () => {
    setIsPopoverVisible(false);
    setIsUpdateModalVisible(true);
  };

  function openDeleteModal() {
    setIsPopoverVisible(false);
    Modal.confirm({
      title: "정말 삭제하시겠습니까?",
      icon: <ExclamationCircleOutlined />,
      content: "한 번 삭제하면 복구할 수 없습니다.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      centered: true,
      onOk() {
        deleteUser(dispatch, user.id)
          .then(() => {
            message.success("유저가 성공적으로 삭제되었습니다.");
          })
          .catch((err) => {
            throw err;
          });
      },
    });
  }

  return (
    <>
      <MenuBox>
        <p onClick={openDetailModal}>보기</p>
        <p onClick={openUpdateModal}>수정</p>
        <p onClick={openDeleteModal}>삭제</p>
      </MenuBox>
      <DetailUserModal
        isModalVisible={isDeatilModalVisible}
        setIsModalVisible={setIsDeatilModalVisible}
      />
      <FetchUserModal
        isModalVisible={isUpdateModalVisible}
        setIsModalVisible={setIsUpdateModalVisible}
        modalType="update"
      />
    </>
  );
};

const MenuBox = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > p {
    font-family: "Noto Sans KR";
    cursor: pointer;
  }
`;

export default PopoverContent;
