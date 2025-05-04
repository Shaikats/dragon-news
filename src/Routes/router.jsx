import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2 className="text-5xl">Home Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
]);

export default router;
