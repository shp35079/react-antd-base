import React from "react";
import { Layout } from "antd";
import MainHeader from "../components/MainHeader";
import MainSider from "../components/MainSider";
import MainContent from "../components/MainContent";

const Main = () => {
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <MainSider />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default Main;
