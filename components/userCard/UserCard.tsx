import React from "react";
import { Card, Grid } from "@mantine/core";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import UserEmail from "./UserEmail";
import UserPhone from "./UserPhone";
import UserWebsite from "./UserWebsite";
import FollowButton from "./FollowButton";
import DeleteButton from "./DeleteButton";
import "./index.css";

const UserCard = ({
  item,
  index,
  openStates,
  handlePopoverToggle,
  handleClick,
  followedUsers,
  handleFollow,
  handleDelete,
}: any) => {
  return (
    <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
      <Card shadow="sm" className="card">
        <Grid gutter="xs" align="center">
          <Grid.Col span={12}>
            <Avatar
              item={item}
              index={index}
              openStates={openStates}
              handlePopoverToggle={handlePopoverToggle}
              handleClick={handleClick}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <UserInfo item={item} followedUsers={followedUsers} />
          </Grid.Col>
          <Grid.Col span={12}>
            <UserEmail item={item} handleClick={handleClick} />
          </Grid.Col>
          <Grid.Col span={12}>
            <UserPhone item={item} handleClick={handleClick} />
          </Grid.Col>
          <Grid.Col span={12}>
            <UserWebsite item={item} handleClick={handleClick} />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6 }}>
            <FollowButton
              item={item}
              followedUsers={followedUsers}
              handleFollow={handleFollow}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6 }}>
            <DeleteButton item={item} handleDelete={handleDelete} />
          </Grid.Col>
        </Grid>
      </Card>
    </Grid.Col>
  );
};

export default UserCard;
