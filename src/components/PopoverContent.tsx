import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import DetailUserModal from "./DetailUserModal";

interface Props {
  setIsPopoverVisible: Dispatch<SetStateAction<boolean>>;
}

const PopoverContent = ({ setIsPopoverVisible }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsPopoverVisible(false);
    setIsModalVisible(true);
  };

  return (
    <>
      <MenuBox>
        <p onClick={openModal}>보기</p>
        <p>수정</p>
        <p>삭제</p>
      </MenuBox>
      <DetailUserModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
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
