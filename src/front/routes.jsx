import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Single } from "./pages/Single.jsx";
import { Demo } from "./pages/Demo.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Private from "./pages/Private.jsx";

function Protected({ children }) {
  const has = typeof window !== "undefined" && sessionStorage.getItem("token");
  return has ? children : <Navigate to="/login" replace />;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route
        index
        element={
          sessionStorage.getItem("token") ? (
            <Navigate to="/private" replace />
          ) : (
            <Navigate to="/signup" replace />
          )
        }
      />
      <Route path="single/:theId" element={<Single />} />
      <Route path="demo" element={<Demo />} />

      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route
        path="private"
        element={
          <Protected>
            <Private />
          </Protected>
        }
      />

      {/* fallback catch-all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Route>
  )
);