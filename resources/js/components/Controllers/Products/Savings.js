import React from "react";
import image from "../../images/2.jpg";

const Savings = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          {" "}
          <h1>Savings</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quo in
            assumenda at, quis voluptates id. Pariatur nulla quidem consequatur
            architecto amet eaque cumque maiores sequi odit necessitatibus?
            Unde, incidunt!
          </p>
        </div>
        <div className="col-sm-4">
          <img src={image} alt="" height="190px" width="200px" />
        </div>
      </div>
    </div>
  );
};

export default Savings;
