import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CreatePost, Lists, Profile, Sidebar } from "./components";

const Dashboard = () => {
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.auth);
  const { search } = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(search).get("tab");
    if (urlParams) {
      setTab(urlParams);
    }
  }, [search]);

  document.title = "Dashboard - Tech Blog";

  return currentUser ? (
    <section className="flex justify-center min-h-screen h-full">
      <div className="hidden absolute left-0 lg:flex flex-col w-1/5 bg-dark-10 min-h-screen py-2 px-4">
        <Sidebar />
      </div>
      {tab === "profile" && (
        <div className="w-full lg:w-3/4 lg:ml-auto lg:mr-20">
          <Profile />
        </div>
      )}
      {tab === "create-post" && (
        <div className="w-full lg:w-3/4 lg:ml-auto lg:mr-20">
          <CreatePost />
        </div>
      )}
      {tab === "posts" && (
        <div className="w-full lg:w-3/4 lg:ml-auto lg:mr-20">
          <Lists />
        </div>
      )}
    </section>
  ) : (
    <Navigate to="/signup" />
  );
};

export default Dashboard;
