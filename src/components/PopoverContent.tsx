import React from "react";
import styled from "styled-components";

const PopoverContent = () => {
  return (
    <MenuBox>
      <p>보기</p>
      <p>수정</p>
      <p>삭제</p>
    </MenuBox>
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
