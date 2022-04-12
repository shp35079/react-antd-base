import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import styled from "styled-components";

const MainSider = () => {
  return (
    <Sider width={256}>
      <CompanyBox>
        <CompanyLogo>주</CompanyLogo>
        <span>주식회사 벨코즈</span>
      </CompanyBox>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" title="이해관계자 관리">
          <Menu.Item key="1">주주 및 이해관계자</Menu.Item>
          <Menu.Item key="2">주주 외 공유 대상자</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="자료 및 보고">
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 15px;

  & > span {
    color: white;
  }
`;

const CompanyLogo = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #56bc88;
  font-family: "Noto Sans KR";
  color: white;
`;

export default MainSider;
