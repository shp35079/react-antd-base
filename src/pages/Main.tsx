import React from "react";
import { Layout } from "antd";
import MainHeader from "../components/MainHeader";
import MainSider from "../components/MainSider";

const Main = () => {
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <MainSider />
      </Layout>
    </Layout>
  );
};

export default Main;
