import * as React from "react";

import Section from "../components/UI/Section";
import Table from "../components/tables/Table";
import { useState } from "react";
import { CircularProgress, Input, Typography } from "@mui/material";
import { useGridApiContext } from "@mui/x-data-grid";
import { UploadFile } from "@mui/icons-material";
import useHttpRequest from "../hooks/useHttpRequest";
import { useEffect } from "react";
import { versionsActions } from "../context/VersionsContext";
import useVersionsContext from "../hooks/useVersionsContext";
import { useRef } from "react";
import { Box } from "@mui/system";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const ImageRender = (params) => {
  return (
    <img src={`http://localhost:5000/${params.value}`} alt={params.value} />
  );
};

const ImageEdit = ({ id, field, value }) => {
  const apiRef = useGridApiContext();
  const handleRef = (element) => {
    if (element) {
      const input = element.querySelector(`input[value="${value}"]`);

      input?.focus();
    }
  };

  const handleChange = (event, newValue) => {
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  return <Input ref={handleRef} type="file" onChange={handleChange} />;
};

const MagazineRender = (params) => {
  return <></>;
};

const MagazineEdit = ({ id, field, value }) => {
  const apiRef = useGridApiContext();
  const handleRef = (element) => {
    if (element) {
      const input = element.querySelector(`input[value="${value}"]`);

      input?.focus();
    }
  };

  const handleChange = (newValue) => {
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  return (
    <Input
      ref={handleRef}
      type="file"
      onChange={(e) => handleChange(e.target.files[0])}
    />
  );
};

export default function AdminVersions() {
  const tableRef = React.useRef();
  const [progress, setProgress] = useState(0);
  const { versions, versionsDispatch, downloadMagazine } = useVersionsContext();

  let columns = [
    {
      field: "versionNum",
      headerName: "الاصدار",
      type: "number",
      flex: 0.1,
      cellClassName: "name-column--cell",
      align: "left",
      editable: true,
    },
    {
      field: "date",
      headerName: "تاريخ الاصدار",
      type: "date",
      flex: 0.2,
      align: "left",
      editable: true,
    },
    {
      field: "description",
      headerName: "الوصف",
      headerAlign: "left",
      flex: 1,
      align: "left",
      editable: true,
    },
    {
      field: "image",
      headerName: "صورة",
      flex: 0.2,
      renderCell: ImageRender,
      renderEditCell: ImageEdit,
      editable: true,
    },
    {
      field: "file",
      headerName: "الملف",
      flex: 0.3,
      cellClassName: "z",
      editable: true,
      renderCell: MagazineRender,
      renderEditCell: MagazineEdit,
    },
  ];

  const {
    sendRequest: sendGetVersionsRequest,
    error: getVersionsError,
    isLoading: getVersionsIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendUpdateVersionRequest,
    error: updateVersionError,
    isLoading: updateVersionIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendDeleteVersionRequest,
    error: deleteVersionError,
    isLoading: deleteVersionIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendCreateVersionRequest,
    error: createVersionError,
    isLoading: createVersionIsLoading,
  } = useHttpRequest();

  console.log(progress);

  const asyncProcessRowUpdate = (row) => {
    const onUploadProgress = (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    };

    const formData = new FormData();

    formData.append("versionNum", row.versionNum);
    formData.append("description", row.description);
    formData.append("file", row.file);

    if (row.isNew) {
      sendCreateVersionRequest(
        {
          url: "/api/magazines",
          method: "POST",
          data: formData,
          onUploadProgress,
        },
        (data) => {
          // sendGetVersionsRequest({ url: "/api/magazines" }, (data) =>
          //   versionsDispatch({
          //     type: versionsActions.SET_VERSIONS,
          //     payload: data,
          //   })
          // );
        }
      );
    } else {
      sendUpdateVersionRequest(
        {
          url: `/api/magazines/${row.id}`,
          method: "PATCH",
          data: row,
          onUploadProgress,
        }
        // () => {
        //   sendGetVersionsRequest({ url: "/api/magazines" }, (data) =>
        //     versionsDispatch({
        //       type: versionsActions.SET_VERSIONS,
        //       payload: data,
        //     })
        //   );
        // }
      );
    }

    return row;
  };

  const handleAsyncDelete = async (id) => {
    sendDeleteVersionRequest(
      { url: `/api/magazines/${id}`, method: "DELETE" }
      // (data) => console.log(data)
    );

    if (!(deleteVersionIsLoading && deleteVersionError)) {
      tableRef.current.handleDeleteClick(id);
    } else {
    }
  };

  useEffect(() => {
    sendGetVersionsRequest({ url: "/api/magazines" }, (data) =>
      versionsDispatch({ type: versionsActions.SET_VERSIONS, payload: data })
    );
  }, [sendGetVersionsRequest, versionsDispatch]);

  return (
    <Section header="الاصدارات" container>
      {updateVersionIsLoading || createVersionIsLoading ? (
        <Box>
          {updateVersionIsLoading ? (
            <Typography>تحديث </Typography>
          ) : (
            <Typography>تصنيع </Typography>
          )}
          <CircularProgressWithLabel value={progress} />
        </Box>
      ) : (
        <></>
      )}

      <Table
        ref={tableRef}
        columns={columns}
        initialRows={versions}
        asyncProcessRowUpdate={asyncProcessRowUpdate}
        handleAsyncDelete={handleAsyncDelete}
      />
    </Section>
  );
}
