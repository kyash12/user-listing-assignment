import React from "react";
import { Text } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import "./index.css";

const UserEmail = ({ item, handleClick }: any) => {
  return (
    <div
      onClick={() => handleClick(item?.email, "mail")}
      className="linksContainer"
    >
      <IconAt color="#868e96" size={18} className="linkIcons" />
      <Text className="link" c="dimmed">
        {item?.email}
      </Text>
    </div>
  );
};

export default UserEmail;
