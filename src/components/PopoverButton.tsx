import { Popover } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { setTargetId, UserDispatchContext } from "../contexts";
import { UserListType } from "../lib/interfaces";
import PopoverContent from "./PopoverContent";

interface Props {
  data: UserListType;
}

const PopoverButton = ({ data }: Props) => {
  const dispatch = useContext(UserDispatchContext);

  return (
    <Popover
      placement="bottomRight"
      content={<PopoverContent />}
      trigger="click"
    >
      <ImageBox onClick={() => setTargetId(dispatch, data.id)}>
        <img
          src="https://ivandjorgon.github.io/youtube-replica/assets/images/dots.png"
          alt=""
        />
      </ImageBox>
    </Popover>
  );
};

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default PopoverButton;
