import MainPage from "../components/MainPage.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokemonPage from "../components/PokemonPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/pokemon/:id",
        element: <PokemonPage />
    }
]);

function Routers() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routers