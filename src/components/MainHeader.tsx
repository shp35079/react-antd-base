import { Header } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <Wrapper>
      <img
        src="https://assets-global.website-files.com/618a0db0508e1a1f3a4061ef/622eceba0154efe8e5cb294e_logo_color.png"
        alt=""
      />
      <UserBox>
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt=""
        />
        <span>박성현</span>
      </UserBox>
    </Wrapper>
  );
};

const Wrapper = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 5%);

  & > img {
    width: 134px;
  }
`;

const UserBox = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  & > img {
    width: 15px;
  }

  & > span {
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default MainHeader;
