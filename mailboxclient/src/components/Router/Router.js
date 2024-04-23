import { Route, Routes } from "react-router-dom";
import Authform from "../Auth/Authform";
import Index from "../Index/Index";
import Signup from "../Auth/Signup";
const routePath = {
  Home: "/",
  Login: "/login",
  Signup: "/signup",
};
const Routers = () => {
  return (
    <Routes>
      <Route path={routePath.Home} element={<Index />} />
      <Route path={routePath.Login} element={<Authform />} />
      <Route path={routePath.Signup} element={<Signup />} />
    </Routes>
  );
};

export default Routers;
