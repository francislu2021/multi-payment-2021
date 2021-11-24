import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { UserContext } from "../../context";

const PriceCard = ({price, handleSubscription}) => {
const [state] = useContext(UserContext);

const dynamicDescription = () => {
  if(price.nickname === 'BASIC') {
    return "5 exclusive stocks";
  } else if (price.nickname === 'STANDARD') {
    return "10 exclusive stocks";
  } else if (price.nickname === 'PREMIUM') {
    return "20 exclusive stocks";
  }
};

const buttonStyle = () => {
  return price.nickname === "BASIC" ? 'btn-outline-danger' : "btn-danger";
};

const headerStyle = () => {
  return price.nickname === "PREMIUM" ? "bg-danger text-light" : "";
};

const borderStyle = () => {
  return price.nickname === "PREMIUM" ? "border-danger" : "";
};

const buttonText = () => {
  return state && state.token ? "Buy the plan" : "Sign up";
}
  return(
    
<div className="col">
  <div className={`card mb-4 rounded-3 shadow-sm ${borderStyle()}`}>
<div className={`card-header py-3 ${headerStyle()}`}>
<h4 className="my-0 fw-normal">{price.nickname}</h4>
</div>

<div className="card-body">
  <h1 className="card-title pricing-card-title">
    {(price.unit_amount / 100).toLocaleString("en-US",{
      style: "currency",
      currency: "CAD",
    })}{" "}
    <small className="text-muted fw-light">/mo</small>
  </h1>
  <ul className="list-unstyled mt-3 mb-4">
    <li className="fw-bold">{dynamicDescription(price)}</li>
    <li>free market analysis</li>
    <li>free consultations</li>
    <li>help center access</li>
  </ul>

{/* <pre>{JSON.stringify(price, null, 4)}</pre>*/}

{/* <Link to="/register">*/}
  <button 
  onClick={(e) => handleSubscription(e, price)}
    className={`w-100 btn btn-lg ${buttonStyle()}`}>
      Sign up
      {buttonText()}
      </button>
    {/*</Link>*/}
  </div>
  </div>
  </div>
  );
};

export default PriceCard;