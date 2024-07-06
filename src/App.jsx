import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
