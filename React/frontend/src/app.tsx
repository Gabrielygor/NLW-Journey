import { CreateTripPage } from './pages/creatTrip/index'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )

}




