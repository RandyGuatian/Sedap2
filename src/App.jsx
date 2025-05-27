import React from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
// const Customers = React.lazy(() => import("./pages/Customers")); // tidak dipakai
const MenuList = React.lazy(() => import("./pages/MenuList")); // ⬅️ tambahkan ini
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const Users = React.lazy(() => import("./pages/Users"));
const Navbar = React.lazy(() => import("./components/Navbar"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menulist" element={<MenuList />} /> {/* ⬅️ tambahkan ini */}
          <Route path="/users" element={<Users />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}
export default App;
