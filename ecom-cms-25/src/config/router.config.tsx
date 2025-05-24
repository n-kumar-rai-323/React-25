import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import NotFound from "../components/ui/card/Not found/not-foundcomponent";
import NotFoundPage from "../pages/errors/not-found.page";
import Admindashbord from "../pages/dashboard/admin-dashbord.page";
import NewTodo from "../redux/slices/todo/newTodo";
import App from "../App";
import { ToastContainer } from "react-toastify";
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path:"/todo",
    element:<App/>
  },
  {
    path: "/admin",
    element:<Admindashbord/>,
    children:[
        {
            index: true,
            element:<>Dashbord Component</>
        },{
            path:"banner/",
            element:<>Banner components</>
        },{
            path:"banner/:id",
            element:<>Banner components</>
        }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const RouterConfig = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/"  Component={LoginPage}> </Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
        </Routes>
      </BrowserRouter> */}
<ToastContainer theme="colored"/>
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
};

export default RouterConfig;
