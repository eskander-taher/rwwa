import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Versions from "./pages/Versions";
import Contact from "./pages/Contact";
import Supportors from "./pages/Supportors";
import Workers from "./pages/Workers";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/blogs/Blog";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Profile from "./pages/Profile";
import AdminBlogs from "./pages/AdminBlogs";
import AdminVersions from "./pages/AdminVersions";
import AdminWorkers from "./pages/AdminWorkers";
import Admins from "./pages/Admins";
import BlogForm from "./components/blogs/BlogForm";
import AdminCategories from "./pages/AdminCategories";
import WhoAreWe from "./pages/WhoAreWe";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import ReadingPage from "./pages/ReadingPage";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import AdminOnly from "./routes/AdminOnly";

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rwwa-login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/versions/:id" element={<ReadingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/supportors" element={<Supportors />} />
          <Route path="/about/workers" element={<Workers />} />
          <Route path="/about/who-are-we" element={<WhoAreWe />} />
          <Route path="/blog-form" element={<BlogForm />}  />
          <Route element={<AdminOnly />}>
            <Route path="dashboard">
              <Route path="profile" element={<Profile />} />
              <Route path="blogs" element={<AdminBlogs />} />
              <Route path="versions" element={<AdminVersions />} />
              <Route path="admins" element={<Admins />} />
              <Route path="workers" element={<AdminWorkers />} />
              <Route path="categories" element={<AdminCategories />} />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
