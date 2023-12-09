import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { MyPlaylistPage } from "./pages/favorites/PlaylistPage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { NotFound } from "./pages/not-found";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/> 
            <Route path="/favorites" element={<MyPlaylistPage/>}/>
            <Route path="/category/:id" element={<CategoryPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}