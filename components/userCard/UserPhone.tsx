import React from "react";
import { Text } from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";
import "./index.css";

const UserPhone = ({ item, handleClick }: any) => {
  return (
    <div
      onClick={() => handleClick(item?.phone, "tele")}
      className="linksContainer"
    >
      <IconPhoneCall color="#868e96" size={18} className="linkIcons" />
      <Text className="link" c="dimmed">
        {item?.phone}
      </Text>
    </div>
  );
};

export default UserPhone;
