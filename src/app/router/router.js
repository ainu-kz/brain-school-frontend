import { createBrowserRouter } from "react-router-dom";
import { About } from "../../components/About";
import { Contacts } from "../../pages/Contact/Contact";
import { Cells } from "../../components/Cells";
import Root from "../../components/Root";
import { Careers } from "../../components/Careers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Cells />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contacts />
      },
      {
        path: "careers",
        element: <Careers />
      },
    ]
  },
]);
