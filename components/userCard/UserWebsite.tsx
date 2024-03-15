import React from "react";
import { Text } from "@mantine/core";
import { IconWorld } from "@tabler/icons-react";
import "./index.css";

const UserWebsite = ({ item, handleClick }: any) => {
  return (
    <div
      onClick={() => handleClick(item?.website, "web")}
      className="linksContainer"
    >
      <IconWorld color="#868e96" size={18} className="linkIcons" />
      <Text className="link" c="dimmed">
        {item?.website}
      </Text>
    </div>
  );
};

export default UserWebsite;
