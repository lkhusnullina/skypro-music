import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}/> 
            {/* Внимательно смотри path */}
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}