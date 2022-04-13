import { Popover } from "antd";
import React from "react";
import styled from "styled-components";
import PopoverContent from "./PopoverContent";

const PopoverButton = () => {
  return (
    <ImageBox>
      <Popover placement="bottomRight" content={PopoverContent} trigger="click">
        <img
          src="https://ivandjorgon.github.io/youtube-replica/assets/images/dots.png"
          alt=""
        />
      </Popover>
    </ImageBox>
  );
};

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default PopoverButton;
