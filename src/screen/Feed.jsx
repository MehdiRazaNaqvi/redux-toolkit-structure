import "../style/feed.css"

import { Row, Col, Card, CardText, CardTitle, Button, Spinner, Placeholder, Progress } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { api_url, img_url } from "../config/api"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setItems, add_to_cart, } from "../store/counterslice"
import { AiOutlineUser } from "react-icons/ai"
// import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import ReactMarkdown from 'react-markdown'
import { TfiShoppingCart } from "react-icons/tfi"
import { getUsersList } from "../store/actions/counterAction"
import { getTodoList } from "../store/actions/postAction"



const App = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)
    const allState = useSelector(state => state)

    console.log(allState)

    const [loading, setLoading] = useState(false)




    return (


        < div className="news_page_base" >

            <Navbar />

            <div className="news_page_articles" style={{ marginBottom: "5rem" }}>

                {loading ?

                    <>
                        <Col id="first_article" sm="12" style={{ width: "100%" }}>

                            <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", width: "100%" }} body>

                                <CardTitle tag="h5" className="max_lines1">
                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />


                                </CardTitle>


                                <CardText className="max_lines2">


                                    <Progress

                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />
                                    <Progress

                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />

                                </CardText>



                                <Progress

                                    color="light"
                                    className="my-3"
                                    value={100}
                                />

                            </Card>

                        </Col>


                        <Col id="articles_half" sm="12" style={{ width: "100%" }}>

                            <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>

                                <CardTitle tag="h5" className="max_lines1">
                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />
                                </CardTitle>


                                <CardText className="max_lines2">



                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />
                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />


                                </CardText>



                                <Progress

                                    color="light"
                                    className="my-3"
                                    value={100}
                                />

                            </Card>

                        </Col>

                        <Col id="articles_half" sm="12" style={{ width: "100%" }}>

                            <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>

                                <CardTitle tag="h5" className="max_lines1">
                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />
                                </CardTitle>


                                <CardText className="max_lines2">



                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />
                                    <Progress
                                        // animated
                                        color="light"
                                        className="my-3"
                                        value={100}
                                    />


                                </CardText>



                                <Progress

                                    color="light"
                                    className="my-3"
                                    value={100}
                                />

                            </Card>

                        </Col>



                    </>

                    :


                    state?.items?.length == 0 ?

                        <span className="no_articles">No Items</span>

                        :

                        <>

                            <Col id="first_article" sm="12" style={{ width: "100%" }}>

                                <Card style={{ height: "23rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", position: "relative", paddingTop: "9rem" }} body>



                                    <img style={{ alignSelf: "center" }} className="item_pic" src={state?.items[0]?.image} />


                                    <CardTitle style={{ textAlign: "center" }} tag="h3" className="max_lines1 news_card_heading">
                                        {state?.items[0]?.title.toLocaleUpperCase()}
                                    </CardTitle>


                                    <CardText style={{ height: "5rem", fontSize: "1rem", color: "gray" }} className="max_lines1">

                                        <ReactMarkdown>{state?.items[0]?.description}

                                        </ReactMarkdown>



                                    </CardText>


                                    <Button size="lg" color="light" className="feed_page_author_bar">

                                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>


                                            <h6 className="user_name_and_status max_lines1" style={{ margin: "0px", marginLeft: "0.5rem", padding: "0px", fontSize: "1.5rem", fontWeight: "600" }}> Rs. {state.items[0]?.price} </h6>
                                        </span>

                                        <span className="user_name_and_status"> </span>

                                    </Button>



                                    <Button color="success" onClick={() => dispatch(getUsersList())}> FETCH </Button>

                                </Card>

                            </Col>


                            {state?.items?.slice(1)?.map((v, i) =>

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

                                            <span className="user_name_and_status">  </span>


                                        </Button>


                                        <Button onClick={() => dispatch( getTodoList() )} color="success"> FETCH TODO</Button>


                                    </Card>

                                </Col>

                            )}



                        </>





                }




            </div>

        </div >
    )

}




export default App