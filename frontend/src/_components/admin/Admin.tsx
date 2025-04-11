import { useContext } from "react";
import { AdminAccountContext } from "./AdminLoginContext";
import AdminLogin from "./AdminLogin";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

export default function Admin() {
  const { user } = useContext(AdminAccountContext);

  if (!user) {
    return <AdminLogin />
  }

  return <div id="admin">
    <AdminHeader />
    <main>
      <Outlet />
    </main>
  </div>
}