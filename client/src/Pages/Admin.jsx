import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSideBar from "../Components/AdminSideBar/AdminSideBar";
import { AuthContext } from "../Context/authContext";

function Admin() {
  const { currentUser } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(currentUser, "user");
    if (!currentUser) setLoading(true);
    else if (currentUser.user.Role != 3)
      return navigate("/", { replace: true });
    else setLoading(false);
  }, [currentUser]);

  if (loading) return;

  return (
    <div className="flex gap-3  ">
      <AdminSideBar />
      <Outlet />
    </div>
  );
}

export default Admin;
