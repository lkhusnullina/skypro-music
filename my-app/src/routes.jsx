import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { MyPlaylistPage } from "./pages/favorites/PlaylistPage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { NotFound } from "./pages/not-found";
import { RegistationPage } from "./pages/register/RegisterPage.jsx";
import { LoginPage } from "./pages/login/LoginPage.jsx";
import { ProtectedRoute } from "./components/protected-route/index.jsx";

export const AppRoutes = ({ user }) => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/> 
            <Route path="/favorites" element={<MyPlaylistPage/>}/>
            <Route path="/category/:id" element={<CategoryPage/>}/>
            <Route 
                path="/" 
                element={
                    <ProtectedRoute isAllowed={Boolean(user)}>
                        <Route path="/login" element={<LoginPage/>}/>
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistationPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}