import React from "react";
import { Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import "./index.css";

const UserInfo = ({ item, followedUsers }: any) => {
  return (
    <Text fw={500} size="lg" ta="center">
      {item?.name}{" "}
      {followedUsers.has(item?.id) && (
        <IconStar size={18} className="linkIcons" />
      )}
    </Text>
  );
};

export default UserInfo;
