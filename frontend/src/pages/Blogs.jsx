import { Box, CircularProgress, Pagination, Tab, Tabs } from "@mui/material";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import Section from "../components/UI/Section";
import { blogsMenu } from "../components/layout/data";
import BlogList from "../components/blogs/BlogList";
import useBlogsContext from "../hooks/useBlogsContext";
import useHttpRequest from "../hooks/useHttpRequest";
import { categoriesActions } from "../context/CategoriesContext";
import useCategoriesContext from "../hooks/useCategoriesContext";

const blogsActions = {
  SET_INITIAL: "SET_INITIAL",
  CHANGE_CATEGORY: "CHANGE_CATEGORY",
  CHANGE_SUBCATEGORY: "CHANGE_SUBCATEGORY",
  MOVE_PAGINATION: "MOVE_PAGINATION",
};

const blogsReducer = (state, action) => {
  const blogsPerPage = 9;
  let filteredBlogs = [];
  const blogs = action.payload.blogs;
  const categories = action.payload.categories;

  const filterBlogs = (state) => {
    return blogs.filter((blog) => {
      return (
        blog.subCategory ===
        categories[state.category]?.subCategories[state.subCategory]
      );
    });
  };

  const movePage = (filteredBlogs, page) => {
    return filteredBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);
  };

  const findMaxPage = (filteredBlogs) => {
    return filteredBlogs.length / blogsPerPage > 1
      ? Math.ceil(filteredBlogs.length / blogsPerPage)
      : 1;
  };

  switch (action.type) {
    case blogsActions.SET_INITIAL:
      filteredBlogs = filterBlogs(state);

      return {
        ...state,
        chosenBolgs: movePage(filteredBlogs, 1),
        maxPages: findMaxPage(filteredBlogs),
      };
    case blogsActions.CHANGE_CATEGORY:
      filteredBlogs = filterBlogs({
        ...state,
        category: action.payload.newValue,
        subCategory: 0,
      });

      return {
        ...state,
        maxPages: findMaxPage(filteredBlogs),
        page: 1,
        chosenBolgs: movePage(filteredBlogs, 1),
        category: action.payload.newValue,
        subCategory: 0,
      };
    case blogsActions.CHANGE_SUBCATEGORY:
      filteredBlogs = filterBlogs({
        ...state,
        subCategory: action.payload.newValue,
      });

      return {
        ...state,
        maxPages: findMaxPage(filteredBlogs),
        page: 1,
        chosenBolgs: movePage(filteredBlogs, 1),
        subCategory: action.payload.newValue,
      };
    case blogsActions.MOVE_PAGINATION:
      filteredBlogs = filterBlogs({
        ...state,
      });

      return {
        ...state,
        page: action.payload.newValue,
        chosenBolgs: movePage(filteredBlogs, action.payload.newValue),
      };
    default:
      return state;
  }
};
const Blogs = () => {
  const [state, dispatch] = useReducer(blogsReducer, {
    category: 0,
    subCategory: 0,
    page: 1,
    maxPages: 1,
    chosenBolgs: [],
    filteredBlogs:[]
  });
  // reqeusts state
  let isLoading = true;
  let error = null;
  // data from context
  const { blogs, blogsDispatch } = useBlogsContext();
  const { categories, categoriesDispatch } = useCategoriesContext();

  // API requests variables and methods
  const {
    error: blogsError,
    isLoading: isBlogsLoading,
    sendRequest: sendBlogsGetRequest,
  } = useHttpRequest();

  const {
    error: categoriesError,
    isLoading: isCategoriesLoading,
    sendRequest: sendCategoriesGetRequest,
  } = useHttpRequest();

  isLoading = isBlogsLoading && isCategoriesLoading;
  error = blogsError || categoriesError;

  // state's changes handlers
  const handleCategoryChange = (event, newValue) => {
    dispatch({
      type: blogsActions.CHANGE_CATEGORY,
      payload: { blogs: blogs, categories: categories, newValue: newValue },
    });
  };

  const handleSubCategoryChange = (event, newValue) => {
    dispatch({
      type: blogsActions.CHANGE_SUBCATEGORY,
      payload: { blogs: blogs, categories: categories, newValue: newValue },
    });
  };

  const handlePageChange = (event, newValue) => {
    dispatch({
      type: blogsActions.MOVE_PAGINATION,
      payload: { blogs: blogs, categories: categories, newValue: newValue },
    });
  };

  // Get all blogs ,subcategories and categories
  useEffect(() => {
    sendBlogsGetRequest({ url: "/api/blogs" }, (data) => {
      blogsDispatch({ type: "SET_BLOGS", payload: data });
    });

    sendCategoriesGetRequest({ url: "/api/categories" }, (data) =>
      categoriesDispatch({
        type: categoriesActions.SET_CATEGORIES,
        payload: data,
      })
    );
  }, [
    sendBlogsGetRequest,
    blogsDispatch,
    sendCategoriesGetRequest,
    categoriesDispatch,
  ]);

  // set initial value after getting blogs and categories form API
  useEffect(() => {
    if (blogs && categories.length !== 0) {
      dispatch({
        type: blogsActions.SET_INITIAL,
        payload: { blogs: blogs, categories: categories },
      });
    }
  }, [blogs, categories]);

  if (error) {
    return <>error</>;
  }

  return (
    <Section header="مقالات" container>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              maxWidth: { xs: 350, sm: 480, md: 720 },
              bgcolor: "white",
              borderRadius: "50px",
              padding: "0 10px",
            }}
          >
            <Tabs
              scrollButtons
              variant="scrollable"
              allowScrollButtonsMobile
              value={state.category}
              onChange={handleCategoryChange}
            >
              {categories.map((item) => {
                return <Tab key={item.id}  label={item.name} />;
              })}
            </Tabs>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: 350, sm: 480, md: 720 },
              bgcolor: "white",
              borderRadius: "50px",
              padding: "0 10px",
            }}
          >
            <Tabs
              scrollButtons
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleSubCategoryChange}
              value={state.subCategory}
            >
              {categories[state.category]?.subCategories.map((item) => {
                return <Tab key={item} label={item} />;
              })}
            </Tabs>
          </Box>
          <BlogList blogs={state.chosenBolgs} isLoading={isLoading} />
          <Pagination
            count={state.maxPages}
            page={state.page}
            onChange={handlePageChange}
            color="secondary"
          />
        </>
      )}
    </Section>
  );
};

export default Blogs;
