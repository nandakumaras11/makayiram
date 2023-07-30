import { useRoutes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { RoomDetails } from "./Pages/RoomDetails/RoomDetails";
import { About } from "./Pages/About/About";

export const AllRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/About",
            element: <About />,
        },
        // {
        //     path: "*",
        //     element: <NotFound />,
        // },
        { path: "/RoomDetails/:roomName", element: <RoomDetails /> },
    ]);

    return element;
}
