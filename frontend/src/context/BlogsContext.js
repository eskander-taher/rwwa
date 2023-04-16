import { createContext, useReducer } from "react";

export const BlogsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((b) => b._id !== action.payload._id),
      };
    case "SET_LATEST_BLOGS":
      console.log(action.payload)
      return {
        ...state,
        latestThreeBlogs: action.payload,
      };
    default:
      return state;
  }
};

export const BlogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, {
    blogs: null,
    latestThreeBlogs: null,
  });

  let contextData = {
    blogs: state.blogs,
    blogsDispatch: dispatch,
    latestThreeBlogs: state.latestThreeBlogs,
  };

  return (
    <BlogsContext.Provider value={contextData}>
      {children}
    </BlogsContext.Provider>
  );
};
