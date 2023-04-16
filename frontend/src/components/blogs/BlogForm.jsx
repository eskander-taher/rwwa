import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { LoadingButton } from "@mui/lab";
import { FileUploader } from "react-drag-drop-files";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container } from "@mui/system";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useHttpRequest from "../../hooks/useHttpRequest";
import useCategoriesContext from "../../hooks/useCategoriesContext";
import { categoriesActions } from "../../context/CategoriesContext";
const fileTypes = ["JPG", "PNG", "JPEG"];

const BlogForm = () => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const text = state?.blog.text ? JSON.parse(state?.blog.text) : null;
  const { categories, categoriesDispatch } = useCategoriesContext();

  const [editorState, setEditorState] = useState(() =>
    text
      ? EditorState.createWithContent(convertFromRaw(text))
      : EditorState.createEmpty()
  );
  const [file, setFile] = useState(state?.blog.image);
  const [title, setTitle] = useState(state?.blog.title);
  const [author, setAuthor] = useState(state?.blog.author);
  const [cat, setCat] = useState(state?.blog.category);
  const [subCat, setSubCat] = useState(state?.blog.subCategory);
  const isDisabled =
    Boolean(file) &&
    Boolean(title) &&
    Boolean(author) &&
    Boolean(cat) &&
    Boolean(subCat);

  const { sendRequest, error, isLoading } = useHttpRequest();
  const {
    sendRequest: sendRequestCategories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useHttpRequest();
  const {
    sendRequest: sendUpdateBlogRequest,
    error: updateBlogError,
    isLoading: isUpdateBlogLoading,
  } = useHttpRequest();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append(
      "text",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
    formData.append("author", author);
    formData.append("category", cat);
    formData.append("subCategory", subCat);

    if (!state?.blog) {
      sendRequest(
        {
          url: "/api/blogs",
          method: "POST",
          data: formData,
        },
        (data) => {
          navigate("../dashboard/blogs");
        }
      );
    } else {
      sendUpdateBlogRequest(
        {
          url: `/api/blogs/${state.blog.id}`,
          method: "PATCH",
          data:  formData,
        },
        (data) => {
          console.log(data);
          navigate("../dashboard/blogs");
        }
      );
    }
  };

  useEffect(() => {
    sendRequestCategories({ url: "/api/categories" }, (data) => {
      console.log(data);
      categoriesDispatch({
        type: categoriesActions.SET_CATEGORIES,
        payload: data,
      });
    });
  }, [categoriesDispatch, sendRequestCategories]);

  return (
    <form enctype="multipart/form-data" onSubmit={handleSubmit}>
      <Container>
        <Grid
          container
          flexDirection="row"
          gap={4}
          m="30px 0"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <FileUploader
              handleChange={(file) => setFile(file)}
              name="file"
              types={fileTypes}
              classes="darg-drop"
              fileOrFiles={file}
            />
          </Grid>
          <Grid item xs={12} md={3} sm={4} lg={2}>
            <TextField
              type="text"
              label="العنوان"
              sx={{ width: "100%" }}
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={2} sm={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["حازم", "محمد الشرقي", "اسكندر"]}
              renderInput={(params) => <TextField {...params} label="الكاتب" />}
              onChange={(e) => setAuthor(e.target.outerText)}
              value={author}
              defaultValue={author}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={2} sm={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                categories.length !== 0
                  ? [...categories.map((category) => category.name)]
                  : ["loading"]
              }
              renderInput={(params) => (
                <TextField {...params} label="الصنف الرئيسي" />
              )}
              loading={isLoadingCategories}
              onChange={(e) => setCat(e.target.outerText)}
              defaultValue={cat}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={2} sm={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={
                categories.length !== 0
                  ? categories.find((category) => category.name === cat)
                      ?.subCategories
                  : ["loading"]
              }
              loading={isLoadingCategories}
              renderInput={(params) => (
                <TextField {...params} label="الصنف الفرعي" />
              )}
              onChange={(e) => setSubCat(e.target.outerText)}
              defaultValue={subCat}
            />
          </Grid>
          <Grid item xs={12}>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              editorClassName="editor"
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              loading={isLoading || isUpdateBlogLoading}
              sx={{ height: "50px" }}
              disabled={!isDisabled}
            >
              submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default BlogForm;
