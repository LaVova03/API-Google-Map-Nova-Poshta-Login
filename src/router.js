import Main from './conteiners/Main/Main';
import Login from './conteiners/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<PrivateRoute />}>
                <Route path="/main" element={<Main />} />
            </Route>

            <Route path="*" element={<div>404 | Page is not found !</div>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;