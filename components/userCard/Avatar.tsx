import React from "react";
import { Box, Image, Popover, Text } from "@mantine/core";
import "./index.css";

const Avatar = ({
  item,
  index,
  openStates,
  handlePopoverToggle,
  handleClick,
}: any) => {
  return (
    <Box className="avtarMainContainer">
      <Popover
        width={200}
        position="top"
        withArrow
        shadow="md"
        opened={openStates[index]}
        onClose={() => handlePopoverToggle(index, false)}
      >
        <Popover.Target>
          <Box
            onClick={() => handleClick(item?.website, "web")}
            onMouseEnter={() => handlePopoverToggle(index, true)}
            onMouseLeave={() => handlePopoverToggle(index, false)}
            className="avtarContainer"
          >
            <Image
              className="avtar"
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${item?.name}`}
            />
          </Box>
        </Popover.Target>
        <Popover.Dropdown className="popover">
          <Text size="xs">{item?.name}</Text>
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

export default Avatar;
