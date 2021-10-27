import React from "react";
import "./App.css";
import Api from "./api/Api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Photo from "./components/Photo/Photo";
import { UserStorage } from "./UserContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <ProtectedRoute path="/conta/*" element={<User />} />
              <Route path="/photo/:id" element={<Photo />} />
              <Route path="/profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
