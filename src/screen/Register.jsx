
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


const Login = () => {






    const generateRecaptcha = () => {

        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {


            }
        }, auth);


    }



    const phone_login = () => {

        setLoading(true)

        generateRecaptcha()

        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, userInfo.phone, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;

                // console.log(confirmationResult)
                set_modal(true)
                toast.success("OTP sent to your phone")
                setLoading(false)
            }).catch((error) => {

                toast.error("refresh page and try again")
                // console.log(error)
                setLoading(false)


            });



    }



    const phone_confirm = (code) => {



        let confirmationResult = window.confirmationResult
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user)
            toast.success("Phone verified")
            setUserInfo({ ...userInfo, phoneVerified: true })

            set_modal(false)
            set_otp("")


        }).catch((error) => {

            // console.log(error)
            // toast.error("there might be some problem")
            toast.error("wrong otp!")
            set_otp({ otp: "" })

        });



    }



    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "", image: "", phone: "", phoneVerified: false })






    const [modal, set_modal] = useState(false)
    const [otp, set_otp] = useState("")



    { otp.length == 6 && phone_confirm(otp) }


    const [loading, setLoading] = useState(false)


    const register = () => {

        setLoading(true)
        axios.post(`${api_url}/auth/signup`, userInfo)
            .then(res => {
                setLoading(false);
                res.data?.error ? toast.error(res.data?.error) :

                    res.data?.message == "Account created successfully" && toast.success("Account created successfully")


            }
            )
            .catch(err => toast.error("Something went wrong"))
    }


    const uploadMedia = ({ data }) => {



        fetch(`${api_url}/media/uploadFile`, {

            method: 'POST',
            // headers: headers,
            body: data

        })


            .then((d) => d.json())
            .then((r) => { r?.data && setUserInfo({ ...userInfo, image: r.data }); setLoading(false) })



    }



    const send_pic = (e) => {

        setLoading(true)
        e.preventDefault()

        const file = e.target.files[0];


        const formData = new FormData

        formData.append("file", file)


        uploadMedia({ data: formData })

    }


    return (


        <div className="login_base">
            <div id="sign-in-button"></div>


            <Modal

                aria-labelledby="contained-modal-title-vcenter"
                centered

                className="modal_base"
                size="lg" isOpen={modal} toggle={() => set_modal(!modal)} >
                <ModalHeader onClick={() => set_modal(false)} className="modal_base_header">


                    <AiOutlineCloseCircle color="gray" size={30} className="otp_modal_close_btn" />

                    Verify Phone
                    {/* {verify.email ? <p className="otp_panel_heading">Verify OTP</p> : verify.phone ? <p className="otp_panel_heading">Verify OTP</p> : null} */}
                    {/* {verify.email ? <p className="otp_panel_heading_small">Enter the code we sent to the email ending in 10 seconds</p> : verify.phone ? <p className="otp_panel_heading_small">Enter the code we sent to the phone number ending in 10 seconds</p> : null} */}
                </ModalHeader>


                <ModalBody className="modal_base_body">


                    <OtpInput
                        className="otp_panel_email"
                        value={otp}
                        onChange={(e) => set_otp(e)}
                        numInputs={6}
                    // separator={<span>-</span>}
                    />



                </ModalBody>


                <ModalFooter>

                    <button className="btn btn-outline-dark modal_verify_btn modal_verify_btn1" onClick={() => phone_login()} >Resend</button>

                    <button className="btn btn-outline-success modal_verify_btn" onClick={() => phone_confirm(otp)} >Verify</button>
                </ModalFooter>


            </Modal >


            <Form className="login_base_form" onSubmit={(e) => { e.preventDefault(); register() }}>






                <FormGroup>
                    <label style={{ fontSize: "1.2rem" }} htmlFor="">Name</label>
                    <Input onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required size="lg" placeholder="Enter Name"></Input>
                    <FormFeedback invalid >Wrong</FormFeedback>
                </FormGroup>


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


                <FormGroup>
                    <label className="phone_verify_label" style={{ fontSize: "1.2rem" }} >Phone {userInfo.phoneVerified ? <Badge color="success">Verified</Badge> : <Badge type="button" onClick={() => phone_login()} color="warning">Verify</Badge>} </label>
                    <Input invalid={userInfo.phone != "" && userInfo.phone.length != 13} valid={userInfo.phoneVerified} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} required size="lg" placeholder="+923378058628"></Input>

                </FormGroup>


                <FormGroup>
                    <label style={{ fontSize: "1.2rem" }}>Photo</label>
                    <Input onChange={(e) => send_pic(e)} required size="lg" type="file" ></Input>

                </FormGroup>


                <Button disabled={loading} type="submit" size="lg" color="success">Register</Button>

            </Form>



        </div>
    )

}









export default Login