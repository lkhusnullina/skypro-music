import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { PlaylistPage } from "./pages/favorites/PlaylistPage";
import { NotFound } from "./pages/not-found";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/> 
            {/* Внимательно смотри адрес */}
            <Route path="/favorites" element={<PlaylistPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}