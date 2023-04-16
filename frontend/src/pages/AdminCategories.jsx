import React, { useEffect, useMemo, useRef } from "react";
import Table from "../components/tables/Table";
import Section from "../components/UI/Section";
import useHttpRequest from "../hooks/useHttpRequest";
import useCategoriesContext from "../hooks/useCategoriesContext";
import { categoriesActions } from "../context/CategoriesContext";

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
    headerName: "الاسم",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "subCategories",
    headerName: "الأصناف الفرعية",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
];

const AdminCategories = () => {
  const tableRef = useRef();
  const { categories, categoriesDispatch } = useCategoriesContext();

  const {
    sendRequest: sendCategoriesGetRequest,
    error: getCategoriesError,
    isLoading: getCategoriesIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendUpdateCategoryRequest,
    error: updateCategoryError,
    isLoading: updateCategoryIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendDeleteCategoryRequest,
    error: deleteCategoryError,
    isLoading: deleteCategoryIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendCreateCategoryRequest,
    error: createCategoryError,
    isLoading: createCategoryIsLoading,
  } = useHttpRequest();

  const asyncProcessRowUpdate = (row) => {
    row.subCategories = row.subCategories.split(",");
    if (row.isNew) {
      sendCreateCategoryRequest(
        {
          url: "/api/categories",
          method: "POST",
          data: row,
        },
        (data) => console.log(data)
      );
    } else {
      sendUpdateCategoryRequest({
        url: `/api/categories/${row.id}`,
        method: "PATCH",
        data: row,
      });
    }
    return row;
  };

  const handleAsyncDelete = (id) => {
    sendDeleteCategoryRequest(
      { url: `api/categories/${id}`, method: "DELETE" },
      (data) => console.log(data)
    );

    if (!(deleteCategoryIsLoading && deleteCategoryError)) {
      tableRef.current.handleDeleteClick(id);
    } else {
    }
  };

  useEffect(() => {
    sendCategoriesGetRequest({ url: "/api/categories" }, (data) =>
      categoriesDispatch({
        type: categoriesActions.SET_CATEGORIES,
        payload: data,
      })
    );
  }, [sendCategoriesGetRequest, categoriesDispatch]);

  return (
    <Section header="الاصناف" container>
      <Table
        ref={tableRef}
        columns={columns}
        initialRows={categories}
        asyncProcessRowUpdate={asyncProcessRowUpdate}
        handleAsyncDelete={handleAsyncDelete}
      />
    </Section>
  );
};

export default AdminCategories;
