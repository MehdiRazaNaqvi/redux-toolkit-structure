


// import { useEffect, useState } from "react"

// import axios from "axios"


// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { api_url, headers } from "../config/api";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import "../css/stripe.css"
// import { Form, Input, FormGroup, FormFeedback, Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { amount_paid } from "../store/counterslice";


// const stripePromise = loadStripe('pk_test_51MGSPSBHamWcZVuTui3e90m1gqmNDh5SPcIkfLqPcJIoGRSBwuAT1hj54pjD5xsA8HbL4jr3DSLhM5Biay2ZjBbK00s3YcMsCM');



// const Wrapper = (props) => (
//     <Elements stripe={stripePromise}>
//         <App />
//     </Elements>
// );




// const App = () => {




//     const stripe = useStripe();
//     const elements = useElements();
//     const dispatch = useDispatch()







//     // const element = useElements()
//     const state = useSelector(state => state.counter)


//     const [userSecret, setUserSecret] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [paid, setPaid] = useState(false)


//     let total = state.price;






//     useEffect(() => {


//         // state.currentUser?.cart?.map(v => total = (parseInt(v.price) + total))
//         fetchClientSecret()


//         // console.log(total)


//     }, [3])








//     const CARD_OPTIONS = {
//         iconStyle: "solid",

//         style: {

//             base: {
//                 color: "black",
//                 fontWeight: 500,

//                 fontSize: "20px"
//             },

//             invalid: {
//                 iconColor: 'red',
//                 color: "red"
//             }

//         }


//     }





//     const Confirm_Transaction = async () => {

//         setLoading(true)
//         await stripe.confirmCardPayment(userSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement)
//             }
//         })
//             .then(r => { setLoading(false); setPaid(true); dispatch(amount_paid()); r.paymentIntent ? toast.success(`Paid ${r.paymentIntent.amount / 100} ${r.paymentIntent.currency}`, { position: toast.POSITION.TOP_CENTER }) : toast.error(r.error?.message) })
//             // .then(r => console.log(r))
//             .catch(e => console.log(e))

//     }




//     const fetchClientSecret = async () => {

//         axios.post(`${api_url}/payment`, {

//             amount: total
//         }, headers)

//             .then(r => setUserSecret(r.data.clientSecret))
//             .catch(e => console.log(e))


//         // setUserSecret(data.data.fetchClientSecret)
//     }




//     const navigate = useNavigate()




//     return (

//         <div className="payment_form">


//             {/* <Form className="payment_form_base">
//                 <FormGroup className="payment_form_group">

//                     <label className="payment_label">Name</label>
//                     <Input className="payment_input" placeholder="Enter your name" type="text" />

//                     <FormFeedback invalid className="form_feedback_signup_page">
//                         No special characters / numbers are allowed in Name
//                     </FormFeedback>

//                 </FormGroup>


//             </Form> */}

//             {!paid &&
//                 <fieldset className="fieldset">
//                     <CardElement options={CARD_OPTIONS} />
//                 </fieldset>
//             }
//             {
//                 !paid ?
//                     <Button disabled={loading} color="success" onClick={() => userSecret != '' ? Confirm_Transaction() : toast.info('Please refresh page')}>PAY NOW</Button>
//                     :
//                     <Button color="success" onClick={() => navigate("/delivery_app/brands")}>Back to Home</Button>

//             }

//         </div>



//     )
// }


// export default Wrapper