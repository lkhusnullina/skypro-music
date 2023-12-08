import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/> 
            {/* Внимательно смотри адрес */}
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}