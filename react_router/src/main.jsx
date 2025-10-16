import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleNavigator from "./ExampleNavigator";
import Basic from "./basic/Basic";
import Nested from "./nested_routes/Nested";
import Protected from "./protected_routes_navigation/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExampleNavigator />,
  },
  {
    path: "/basic/*",
    element: <Basic />,
  },
  {
    path: "/nested/*",
    element: <Nested />,
  },
  // Alternative way to nest routes
  // {
  //   path: "/nested",
  //   element: <Nested />,
  //   children: [
  //     {
  //       path: "topics",
  //       element: <Topics />,
  //       children: [
  //         {
  //           path: ":topicName",
  //           element: <Topic />,
  //         },
  //         {
  //           path: "search/:query",
  //           element: <Search />,
  //         },
  //       ]
  //     },
  //   ]
  // },
  {
    path: "/protected/*",
    element: <Protected />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>{router.element}</RouterProvider>
  </StrictMode>
);
