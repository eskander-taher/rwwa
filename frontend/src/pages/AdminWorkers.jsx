import React, { useEffect, useMemo, useRef, useState } from "react";
import Table from "../components/tables/Table";
import Section from "../components/UI/Section";
import useHttpRequest from "../hooks/useHttpRequest";
import useWorkersContext from "../hooks/useWorkersContext";
import { workersActions, WorkersActions } from "../context/WorkersContext";
import { Autocomplete, TextField } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";



const TypeEditINputCell = ({ id, value, field }) => {
  const apiRef = useGridApiContext();

  const handleChange = (event, newValue) => {
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  const handleRef = (element) => {
    if (element) {
      const input = element.querySelector(`input[value="${value}"]`);

      input?.focus();
    }
  };

  return (
    <Autocomplete
      disablePortal
      ref={handleRef}
      options={["أعضاء", "ادارة", "core te"]}
      renderInput={(params) => <TextField {...params} />}
      onChange={handleChange}
      value={value}
      sx={{ width: "100%" }}
    />
  );
};

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "createdAt",
    flex: 1,
    headerName: " تاريخ الانشاء",
    type: "date",
    headerAlign: "left",
    align: "left",
    editable: true,
  },
  {
    field: "job",
    headerName: "العمل",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "type",
    headerName: "القسم",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
    renderEditCell: TypeEditINputCell,
  },
];

const AdminWorkers = () => {
  const tableRef = useRef();
  const { workers, workersDispatch } = useWorkersContext();

  const {
    sendRequest: sendGetWorkersRequest,
    error: getWorkersError,
    isLoading: getWorkersIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendUpdateWorkerRequest,
    error: updateWorkerError,
    isLoading: updateWorkerIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendDeleteWorkerRequest,
    error: deleteWorkerError,
    isLoading: deleteWorkerIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendCreateWorkerRequest,
    error: createWorkerError,
    isLoading: createWorkerIsLoading,
  } = useHttpRequest();

  const asyncProcessRowUpdate = (row) => {
    if (row.isNew) {
      sendCreateWorkerRequest(
        {
          url: "/api/workers",
          method: "POST",
          data: row,
        },
        (data) => console.log(data)
      );
    } else {
      sendUpdateWorkerRequest({
        url: `/api/workers/${row.id}`,
        method: "PATCH",
        data: row,
      });
    }
    return row;
  };

  const handleAsyncDelete = async (id) => {
    sendDeleteWorkerRequest(
      { url: `api/workers/${id}`, method: "DELETE" },
      (data) => console.log(data)
    );

    if (!(deleteWorkerIsLoading && deleteWorkerError)) {
      tableRef.current.handleDeleteClick(id);
    } else {
    }
  };

  useEffect(() => {
    sendGetWorkersRequest({ url: "api/workers/" }, (data) => {
      console.log(data);
      workersDispatch({ type: workersActions.SET_WORKERS, payload: data });
    });
  }, [sendGetWorkersRequest, workersDispatch]);



  return (
    <Section header="العاملين" container>
      <Table
        ref={tableRef}
        columns={columns}
        initialRows={workers}
        handleAsyncDelete={handleAsyncDelete}
        asyncProcessRowUpdate={asyncProcessRowUpdate}
      />
    </Section>
  );
};

export default AdminWorkers;
