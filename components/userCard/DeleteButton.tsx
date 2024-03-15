import React from "react";
import { Button } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import "./index.css";

const DeleteButton = ({ item, handleDelete }: any) => {
  return (
    <Button
      leftSection={<IconTrash size={14} />}
      variant="outline"
      className="button"
      fullWidth
      onClick={() => handleDelete(item?.id)}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
