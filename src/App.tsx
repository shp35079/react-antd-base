import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";
import "antd/dist/antd.css";
import { UserProvider } from "./contexts";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Main />
    </UserProvider>
  );
}

export default App;
