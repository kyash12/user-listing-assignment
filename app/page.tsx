"use client";
import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mantine/core";
import axios from "axios";
import "./index.css";
import UserCard from "../components/userCard/UserCard";

export default function Page() {
  const [userData, setUserData] = useState<any>([]);
  const [openStates, setOpenStates] = useState<boolean[]>([]);
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set());

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(response.data);
      setOpenStates(new Array(response.data.length).fill(false)); // Initialize open states array
      console.log("Data:", response.data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  const handlePopoverToggle = (index: number, isOpen: boolean) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = isOpen;
    setOpenStates(newOpenStates);
  };

  const handleClick = (data: any, type: any) => {
    if (type === "web") {
      window.open(`https://${data}`, "_blank", "noreferrer");
    } else if (type === "tele") {
      window.location.href = `tel:${data}`;
    } else {
      window.location.href = `mailto:${data}`;
    }
  };
  const handleDelete = (id: any) => {
    const newUserData = userData.filter((user: any) => user.id !== id);
    setUserData(newUserData);
  };
  const handleFollow = (id: any) => {
    const updatedFollowedUsers = new Set(followedUsers);
    if (updatedFollowedUsers.has(id)) {
      updatedFollowedUsers.delete(id);
    } else {
      updatedFollowedUsers.add(id);
    }
    setFollowedUsers(updatedFollowedUsers);
  };

  return (
    <Container className="userListingMainContainer" size="xxl">
      <Grid gutter="xl">
        {userData.map((item: any, index: number) => (
          <UserCard
            item={item}
            index={index}
            openStates={openStates}
            handlePopoverToggle={handlePopoverToggle}
            handleClick={handleClick}
            followedUsers={followedUsers}
            handleFollow={handleFollow}
            handleDelete={handleDelete}
          />
        ))}
      </Grid>
    </Container>
  );
}
