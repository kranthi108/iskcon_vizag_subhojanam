import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import DonateForm from "./pages/DonateForm";
import Success from "./pages/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/donate",
    Component: DonateForm,
  },
  {
    path: "/success",
    Component: Success,
  },
]);
