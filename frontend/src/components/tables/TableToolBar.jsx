import { Button } from "@mui/material";
import { GridToolbarContainer, GridRowModes } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { randomId } from "@mui/x-data-grid-generator";
import React from "react";

function TableToolBar(onAddClick, props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    if (onAddClick) {
      onAddClick();
    } else {
      const id = randomId();
      setRows((oldRows) => [{ id, isNew: true }, ...oldRows]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit },
      }));
    }
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
export default TableToolBar;
