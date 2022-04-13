import { Divider, Layout, PageHeader, Button, Table, Popover } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchList } from "../lib/api";
import { UserListType } from "../lib/interfaces";

const MainContent = () => {
  const [users, setUsers] = useState<UserListType[]>([]);
    <MenuBox>
      <p>보기</p>
      <p>수정</p>
      <p>삭제</p>
    </MenuBox>
  );

  useEffect(() => {
    fetchList()
      .then((res) => {
        setUsers(res as UserListType[]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
      dataIndex: "affiliation",
      key: "affiliation",
      sorter: true,
    },
    {
      title: "이메일",
      dataIndex: "email",
      key: "email",
      sorter: true,
    },
    {
      title: "직함",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "",
      dataIndex: "menu",
      key: "menu",
      render: () => (
        <ImageBox>
          <Popover placement="bottomRight" content={content} trigger="click">
            <img
              src="https://ivandjorgon.github.io/youtube-replica/assets/images/dots.png"
              alt=""
            />
          </Popover>
        </ImageBox>
      ),
    },
  ];

  return (
    <Wrapper>
      <PageHeader title="주주 및 이해관계자" />
      <Divider />
      <ButtonWrapper>
        <Button type="primary" size="large">
          ＋ 추가하기
        </Button>
      </ButtonWrapper>
      <Table
        columns={columns}
        dataSource={users}
        bordered
        pagination={{
          position: ["bottomCenter"],
          total: 100,
          defaultPageSize: 20,
          defaultCurrent: 1,
        }}
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

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

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

export default MainContent;
