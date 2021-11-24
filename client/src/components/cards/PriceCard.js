import React from "react";

const PriceCard = () => {
  return(
    
<div className="col">
  <div className="card mb-4 rounded-3 shadow-sm">
<div className="card-header py-3">
<h4 className="my-0 fw-normal">BASIC</h4>
</div>

<div className="card-body">
  <h1 className="card-title pricing-card-title">$50/mo
  </h1>
  <ul className="list-unstyled mt-3 mb-4">
    <li>5 exclusive stocks</li>
    <li>free market analysis</li>
    <li>free consultations</li>
    <li>help center access</li>
  </ul>

  <button className="w-100 btn btn-lg btn-outline-danger">Sign up</button>
  </div>
  </div>
  </div>
  );
};

export default PriceCard;