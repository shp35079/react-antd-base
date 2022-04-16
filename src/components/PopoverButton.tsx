import { Popover } from "antd";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { setUser, UserDispatchContext } from "../contexts";
import { UserListType } from "../interfaces";
import PopoverContent from "./PopoverContent";

interface PopoverButtonProps {
  data: UserListType;
}

const PopoverButton = ({ data }: PopoverButtonProps) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const dispatch = useContext(UserDispatchContext);

  const handleVisibleChange = (visible: boolean) => {
    setIsPopoverVisible(visible);
  };

  return (
    <Popover
      placement="bottomRight"
      content={<PopoverContent setIsPopoverVisible={setIsPopoverVisible} />}
      trigger="click"
      visible={isPopoverVisible}
      onVisibleChange={handleVisibleChange}
    >
      <ImageBox onClick={() => setUser(dispatch, data)}>
        <img
          src="https://ivandjorgon.github.io/youtube-replica/assets/images/dots.png"
          alt="see more icon with three dots"
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
