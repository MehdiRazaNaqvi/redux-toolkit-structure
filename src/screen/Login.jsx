
import "../style/login.css"

import { Form, Input, Button, FormFeedback, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Badge } from "reactstrap"
import { useState } from "react"

import OtpInput from "react-otp-input"

import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"

import { auth } from "../config/firebase"
import { toast } from "react-toastify"
import { AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai"
import { img_url, api_url } from "../config/api"
import axios from "axios"
import { useDispatch } from "react-redux"
import { userLogin } from "../store/counterslice"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {







    const [userInfo, setUserInfo] = useState({ email: "", password: "" })








    const [loading, setLoading] = useState(false)



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = () => {

        const login_successful = (accessToken, _doc) => {
            navigate("/restaurant_app")
            dispatch(userLogin({ accessToken, _doc }))
        }

        setLoading(true)


        axios.post(`${api_url}/auth/login`, userInfo)
            .then(res => {

                setLoading(false)

                res.data?.accessToken ?


                    login_successful(res.data?.accessToken, res.data?._doc)

                    :

                    toast.success("Invalid Email or Password")
            }


            )

            .catch(err => { toast.error("Something went wrong"); setLoading(false) })
    }



    return (


        <div className="login_base">





            <Form className="login_base_form" onSubmit={(e) => { e.preventDefault() }}>









                <FormGroup>
                    <label style={{ fontSize: "1.2rem" }} htmlFor="">Email</label>
                    <Input onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} required type="email" size="lg" placeholder="Enter Email"></Input>
                    <FormFeedback invalid >Wrong</FormFeedback>
                </FormGroup>


                <FormGroup>
                    <label style={{ fontSize: "1.2rem" }} htmlFor="">Password</label>
                    <Input type="password" onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} required size="lg" placeholder="Enter Password"></Input>
                    <FormFeedback invalid >Wrong</FormFeedback>
                </FormGroup>






                <Button disabled={loading} type="submit" size="lg" color="success">Login</Button>

            </Form>



        </div>
    )

}









export default Login