import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { MyPlaylistPage } from "./pages/favorites/PlaylistPage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { NotFound } from "./pages/not-found";
// import { RegistationPage } from "./pages/register/RegisterPage.jsx";
// import { LoginPage } from "./pages/login/LoginPage.jsx";
import { ProtectedRoute } from "./components/protected-route/index.jsx";
import AuthPage from "./pages/authpage/AuthPage.jsx";
import { useUserContext } from "./context/user.js";

export const AppRoutes = ({ setUser }) => {
    const {user} = useUserContext();
    
    return(
        <Routes>
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<MainPage user={user}/>}/> 
                <Route path="/favorites" element={<MyPlaylistPage/>}/>
                <Route path="/category/:id" element={<CategoryPage/>}/>
            </Route>

            {/* <Route path="/login" element={<LoginPage setUser={setUser}/>}/> */}
            <Route path="/login" element={<AuthPage isLoginMode={true}/>}/>
            <Route path="/registration" element={<AuthPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}