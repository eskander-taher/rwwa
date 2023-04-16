import React, { useEffect, useRef } from "react";
import Table from "../components/tables/Table";
import useHttpRequest from "../hooks/useHttpRequest";
import Section from "../components/UI/Section";
import { useNavigate } from "react-router-dom";
import useBlogsContext from "../hooks/useBlogsContext";

const initialRows = [
  {
    _id: 1,
    title: "اخبار",
    date: "21-02-2022",
    category: "اقتصاد",
    subcategory: "اموال",
    author: "محمد الشرقي",
  },
  {
    _id: 2,
    title: "اخبار",
    date: "21-02-2022",
    category: "اقتصاد",
    subcategory: "اموال",
    author: "محمد الشرقي",
  },
];

const columns = [
  {
    field: "title",
    headerName: "العنوان",
    flex: 1,
    cellClassName: "name-column--cell",
    editable: true,
  },
  {
    field: "date",
    headerName: "التاريخ",
    type: "date",
    headerAlign: "left",
    align: "right",
    editable: true,
  },
  {
    field: "category",
    headerName: "صنف رئيسي",
    flex: 1,
    editable: true,
  },
  {
    field: "subCategory",
    headerName: "صنف فرعي",
    flex: 1,
    editable: true,
  },
  {
    field: "author",
    headerName: "الكاتب",
    flex: 1,
    editable: true,
  },
];

const AdminBlogs = () => {
  const tableRef = useRef();
  const navigate = useNavigate();
  const { blogs, blogsDispatch } = useBlogsContext();

  const {
    sendRequest: sendGetBlogsRequest,
    error: getBlogsError,
    isLoading: getblogsIsLoading,
  } = useHttpRequest();

  const {
    sendRequest: sendDeleteBlogRequest,
    error: deleteBlogError,
    isLoading: deleteBlogIsLoading,
  } = useHttpRequest();

  const handleAsyncDelete = (id) => {
    sendDeleteBlogRequest(
      { url: `/api/blogs/${id}`, method: "DELETE" },
      (data) => console.log(data)
    );

    if (!(deleteBlogIsLoading && deleteBlogError)) {
      tableRef.current.handleDeleteClick(id);
    }
  };

  const onAddClick = () => {
    navigate("/blog-form");
  };
  const onEditClick = (blog) => {
    navigate("/blog-form", { state: { blog } });
  };

  useEffect(() => {
    sendGetBlogsRequest({ url: "/api/blogs" }, (data) =>
      blogsDispatch({ type: "SET_BLOGS", payload: data })
    );
  }, [sendGetBlogsRequest,blogsDispatch]);

  return (
    <Section header="المقالات" container>
      <Table
        ref={tableRef}
        columns={columns}
        initialRows={blogs}
        handleAsyncDelete={handleAsyncDelete}
        onAddClick={onAddClick}
        onEditClick={onEditClick}
      />
    </Section>
  );
};

export default AdminBlogs;
