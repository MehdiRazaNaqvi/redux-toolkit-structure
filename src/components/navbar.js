import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { img_url } from '../config/api';
import { logout } from "../store/counterslice"
import { AiOutlineUser } from "react-icons/ai"
import { MdArticle } from "react-icons/md"
import { TfiShoppingCart } from "react-icons/tfi"

import "../style/navbar.css"


function Example() {



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.counter)
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);





    return (



        <div style={{ width: "100%", backgroundColor: "red" }}>
            <Navbar color="light" style={{ width: "100%" }} light>



                <NavbarBrand className="me-auto max_lines1" style={{ margin: "0px", padding: "0px", display: "flex", alignItems: "center", gap: "0.5rem" }}>


                    {state?.currentUser?.jwt ?
                        <>
                            <img className='user_nav_pic' style={{ marginRight: "0.2rem", width: "3rem", height: "3rem", borderRadius: "50%" }} src={`${img_url}/${state?.currentUser?.image}`} />
                            {state?.currentUser?.name}

                        </>

                        :


                        <>
                            <AiOutlineUser size={30} />
                            {"Welcome!"}


                        </>



                    }
                </NavbarBrand>



                <span onClick={() => { navigate("/restaurant_app/cart") }} className='cart_len_nav'>{state.cart.length}
                    <TfiShoppingCart size={30} />
                </span>

                {!state?.currentUser?.jwt &&
                    <>
                        <NavbarToggler onClick={toggleNavbar} className="me-2" />



                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>


                                <NavItem onClick={() => navigate("/restaurant_app/login")}>
                                    <NavLink>
                                        Login
                                    </NavLink>
                                </NavItem>

                                <NavItem onClick={() => navigate("/restaurant_app/signup")}>
                                    <NavLink>
                                        Sign Up
                                    </NavLink>
                                </NavItem>


                            </Nav>
                        </Collapse>
                    </>
                }






            </Navbar>
        </div>
    );
}

export default Example;