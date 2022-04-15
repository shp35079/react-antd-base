import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import CreateUserModal from "./CreateUserModal";
import DetailUserModal from "./DetailUserModal";

interface Props {
  setIsPopoverVisible: Dispatch<SetStateAction<boolean>>;
}

const PopoverContent = ({ setIsPopoverVisible }: Props) => {
  const [isDeatilModalVisible, setIsDeatilModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const openDetailModal = () => {
    setIsPopoverVisible(false);
    setIsDeatilModalVisible(true);
  };

  const openUpdateModal = () => {
    setIsPopoverVisible(false);
    setIsUpdateModalVisible(true);
  };

  return (
    <>
      <MenuBox>
        <p onClick={openDetailModal}>보기</p>
        <p onClick={openUpdateModal}>수정</p>
        <p>삭제</p>
      </MenuBox>
      <DetailUserModal
        isModalVisible={isDeatilModalVisible}
        setIsModalVisible={setIsDeatilModalVisible}
      />
      <CreateUserModal
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
