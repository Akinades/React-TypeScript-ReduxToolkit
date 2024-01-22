import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rootpage from "./router/Rootpage";
import Homepage from "./router/Hompage";
import LayoutStyle from "./router/LayoutStyle";
import Formpage from "./router/Formpage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage />,

      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "layout",
          element: <LayoutStyle />,
        },
        {
          path: "form",
          element: <Formpage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
