import React, { useEffect, useState } from "react";
import Section from "../components/UI/Section";
import Table from "../components/tables/Table";
import { useRef } from "react";
import useHttpRequest from "../hooks/useHttpRequest";

const initialRows = [
  {
    id: 1,
    name: "باسل",
    date: "21-02-2022",
  },
  {
    id: 2,
    name: "أحمد",
    date: "21-02-2022",
  },
];

const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "email",
    headerName: "الحساب الالكتروني",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "newPassword",
    headerName: "password",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "createdAt",
    flex: 1,
    headerName: "تاريح الانشاء",
    type: "date",
    headerAlign: "left",
    align: "left",
    editable: true,
  },
];

const Admins = () => {
  const tableRef = useRef();
  const [admins, setAdmins] = useState([]);

  const {
    sendRequest: sendGetAdminsRequest,
    error: getAdminsError,
    isLoading: getAdminsIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendUpdateAdminRequest,
    error: updateAdminError,
    isLoading: updateAdminIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendDeleteAdminRequest,
    error: deleteAdminError,
    isLoading: deleteAdminIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendCreateAdminRequest,
    error: createAdminError,
    isLoading: createAdminIsLoading,
  } = useHttpRequest();
  

  const asyncProcessRowUpdate = (row) => {
    row ={...row,password:row.newPassword}
    delete row.newPassword
    if (row.isNew) {
      sendCreateAdminRequest(
        {
          url: "/api/admins",
          method: "POST",
          data: row,
        },
        (data) => console.log(data)
      );
    } else {
      sendUpdateAdminRequest({
        url: `/api/admins/${row.id}`,
        method: "PUT",
        data: row,
      });
    }
    console.log(row.id);
    return row;
  };



  const handleAsyncDelete = async (id) => {
    sendDeleteAdminRequest(
      { url: `api/admins/${id}`, method: "DELETE" },
      (data) => console.log(data)
    );

    if (!(deleteAdminIsLoading && deleteAdminError)) {
      tableRef.current.handleDeleteClick(id);
    } else {
    }
  };

  useEffect(() => {
    sendGetAdminsRequest({ url: "/api/admins" }, (data) => setAdmins(data));
  }, [sendGetAdminsRequest]);

  return (
    <Section header="المشرفين" container>
      <Table
        ref={tableRef}
        columns={columns}
        initialRows={admins}
        // handleAsyncSave={handleAsyncSave}
        handleAsyncDelete={handleAsyncDelete}
        asyncProcessRowUpdate={asyncProcessRowUpdate}
      />
    </Section>
  );
};

export default Admins;
