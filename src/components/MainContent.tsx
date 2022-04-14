import { Divider, Layout, PageHeader, Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TABLE_COLUMN } from "../constances";
import { fetchList } from "../lib/api";
import { UserListType } from "../lib/interfaces";
import CreateUserModal from "./CreateUserModal";

const MainContent = () => {
  const [users, setUsers] = useState<UserListType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchList()
      .then((res) => {
        setUsers(res as UserListType[]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Wrapper>
      <PageHeader title="주주 및 이해관계자" />
      <Divider />
      <ButtonWrapper>
        <Button
          onClick={() => setIsModalVisible(true)}
          type="primary"
          size="large"
        >
          ＋ 추가하기
        </Button>
      </ButtonWrapper>
      <Table
        columns={TABLE_COLUMN}
        dataSource={users}
        bordered
        pagination={{
          position: ["bottomCenter"],
          total: 100,
        }}
        scroll={{ y: 275 }}
      />
      <CreateUserModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalType="add"
      />
    </Wrapper>
  );
};

const Wrapper = styled(Layout.Content)`
  padding: 0px 30px;

  .ant-page-header {
    padding: 16px 0 0 0;
  }

  & table {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
  }

  & img {
    width: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0;
`;

export default MainContent;
