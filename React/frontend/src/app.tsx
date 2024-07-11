import { CreateTripPage } from './pages/creat-trip/index'
import { TripDetailsPage } from './pages/trip-details//index'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )

}




