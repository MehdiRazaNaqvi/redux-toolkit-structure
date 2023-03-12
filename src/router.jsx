




import Feed from "./screen/Feed"
import Login from "./screen/Login"
import Register from "./screen/Register"
import Cart from "./screen/Cart"






import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer />


            <Router>
                <Routes>



                    <Route element={<Feed />} path="/restaurant_app" />
                    <Route element={<Login />} path="/restaurant_app/login" />
                    <Route element={<Register />} path="/restaurant_app/register" />
                    <Route element={<Cart />} path="/restaurant_app/cart" />



                </Routes>
            </Router>


        </div>
    )

}



export default App