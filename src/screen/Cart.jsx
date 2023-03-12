import "../style/feed.css"

import { Row, Col, Card, CardText, CardTitle, Button, Spinner, Placeholder, Progress } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { api_url, img_url } from "../config/api"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { remove_from_cart } from "../store/counterslice"
import { AiOutlineUser } from "react-icons/ai"
// import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import ReactMarkdown from 'react-markdown'
import { TfiShoppingCart } from "react-icons/tfi"



const App = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)









    return (


        < div className="news_page_base" >

            <Navbar />


            <span className="cart_price" style={{ fontSize: "3rem", color: "gray" }}>Rs. {state.total}</span>
            <Button size="lg" color="success">Pay Now</Button>

            <div className="news_page_articles" style={{ marginBottom: "5rem" }}>




                {state?.cart?.length == 0 ?

                    <span className="no_articles">Cart Empty</span>

                    :





                    state?.cart?.map((v, i) =>

                        <Col id="articles_half" key={i} sm="12" style={{ width: "100%" }}>

                            <Card style={{ height: "25rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", position: "relative", paddingTop: "9rem" }} body>
                                {/* const hyphenatedString = myString.replace(/\s+/g, '-'); */}


                                <img style={{ alignSelf: "center" }} className="item_pic" src={v.image} />


                                <CardTitle style={{ textAlign: "center" }} tag="h3" className="max_lines1 news_card_heading">
                                    {v?.title.toLocaleUpperCase()}
                                </CardTitle>


                                <CardText style={{ height: "5rem", fontSize: "1rem", color: "gray" }} className="max_lines1">

                                    <ReactMarkdown>{v?.description}

                                    </ReactMarkdown>



                                </CardText>


                                <Button size="lg" color="light" className="feed_page_author_bar">

                                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>


                                        <h6 className="user_name_and_status max_lines1" style={{ margin: "0px", marginLeft: "0.5rem", padding: "0px", fontSize: "1.5rem", fontWeight: "600" }}> Rs. {v?.price} </h6>
                                    </span>

                                    <span className="user_name_and_status"> <Button onClick={() => dispatch(remove_from_cart(v))} color="danger"> <TfiShoppingCart size={30} /> </Button> </span>

                                </Button>


                            </Card>

                        </Col>

                    )




                }





            </div>

        </div >
    )

}




export default App