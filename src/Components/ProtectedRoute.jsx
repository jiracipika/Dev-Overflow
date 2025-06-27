import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = () => {
    const auth = useSelector((state) => state.auth)
    console.log("auth from protected route ", auth)
    const location = useLocation();

    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/signin"/>
    );
}

export default ProtectedRoute;