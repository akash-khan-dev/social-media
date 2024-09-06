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
import CreatePostPopup from "./components/pageComponents/Home/PostHome/CreatePostPopup";
import ActivatePage from "./pages/home/ActivatePage";
import ForgotPassword from "./pages/forgotPassword";
import { useState } from "react";

function App() {
  const [postPopupVisible, setPostPopupVisible] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<NotLoginUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
        </Route>
        <Route element={<LoggedInUser />}>
          <Route element={<LayOut />}>
            <Route
              path="/"
              element={<Home setPostPopupVisible={setPostPopupVisible} />}
            />
            <Route path="/activate/:token" element={<ActivatePage />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      {postPopupVisible && (
        <CreatePostPopup setPostPopupVisible={setPostPopupVisible} />
      )}

      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
