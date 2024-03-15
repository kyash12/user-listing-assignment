import React from "react";
import { Button } from "@mantine/core";
import { IconUserPlus, IconUserMinus } from "@tabler/icons-react";
import "./index.css";

const FollowButton = ({ item, followedUsers, handleFollow }: any) => {
  return (
    <Button
      leftSection={
        followedUsers.has(item?.id) ? (
          <IconUserMinus size={14} />
        ) : (
          <IconUserPlus size={14} />
        )
      }
      variant={followedUsers.has(item?.id) ? "default" : "filled"}
      className="button"
      fullWidth
      onClick={() => handleFollow(item?.id)}
    >
      {followedUsers.has(item?.id) ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
