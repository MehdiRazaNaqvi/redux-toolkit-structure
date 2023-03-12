import "../style/feed.css"

import { Row, Col, Card, CardText, CardTitle, Button, Spinner, Placeholder, Progress } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { api_url, img_url } from "../config/api"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setItems, add_to_cart } from "../store/counterslice"
import { AiOutlineUser } from "react-icons/ai"
// import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import ReactMarkdown from 'react-markdown'
import { TfiShoppingCart } from "react-icons/tfi"



const App = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)

    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        axios.get(`${api_url}/items`)
            .then(res => {

                setLoading(false);
                console.log(res)
                if (res.data?.data) { dispatch(setItems({ data: res.data?.data, cb: () => { } })) }
                else { toast.error("Something went wrong") }

            })
            .catch(err => { toast.error("Something went wrong"); setLoading(false) })


        // axios.get(`${api_url}/users?populate=image`)
        //     .then(res => { dispatch(setAuthors({ data: res.data, cb: () => { } })); setLoading(false); })
        //     .catch(err => { toast.error("Something went wrong"); setLoading(false); })

    }, [])


    // console.log(state)

    const calculate_days = (date) => {
        const pastDate = new Date(date);
        const currentDate = new Date();

        const timeDifference = currentDate.getTime() - pastDate.getTime();


        // const seconds = Math.floor(timeDifference / 1000);
        // const minutes = Math.floor(seconds / 60);
        // const hours = Math.floor(minutes / 60);
        // const days = Math.floor(timeDifference / 24*60*60*1000);
        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        if (days >= 0 && days < 1) { return ("Today") }

        else if (days == 1) {
            return (`Yesterday`)
        }
        else {
            return (`${days} days ago`)
        }
    }

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

                                        <span className="user_name_and_status"> <Button color="success" onClick={() => dispatch(add_to_cart(state?.items[0]))}> <TfiShoppingCart size={30} /> </Button> </span>

                                    </Button>


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

                                            <span className="user_name_and_status"> <Button onClick={() => dispatch(add_to_cart(v))} color="success"> <TfiShoppingCart size={30} /> </Button> </span>

                                        </Button>


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