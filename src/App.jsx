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
import { useGetAllPostQuery } from "./StateFeature/api/authApi";
import Profile from "./pages/userProfile";
import Friends from "./pages/friends";
import NotFound from "./pages/notFound";

function App() {
  const [postPopupVisible, setPostPopupVisible] = useState(false);

  const { data: post } = useGetAllPostQuery();

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
              element={
                <Home
                  post={post}
                  setPostPopupVisible={setPostPopupVisible}
                  postPopupVisible={postPopupVisible}
                />
              }
            />
            <Route path="/activate/:token" element={<ActivatePage />} />
            <Route path="/friends" element={<Friends />} />
            <Route
              path="/profile"
              element={<Profile setPostPopupVisible={setPostPopupVisible} />}
            />
            <Route path="/profile/:username" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      {postPopupVisible && (
        <CreatePostPopup
          setPostPopupVisible={setPostPopupVisible}
          postPopupVisible={postPopupVisible}
        />
      )}

      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
