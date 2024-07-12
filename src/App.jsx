import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Login from "./pages/login";
import { NotLoginUser } from "../src/components/PrivateRoute/NoteLoginUser";
import { LoggedInUser } from "../src/components/PrivateRoute/LoggedInUser";

import LayOut from "../src/components/RootLayout/LayOut";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<NotLoginUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<LoggedInUser />}>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
