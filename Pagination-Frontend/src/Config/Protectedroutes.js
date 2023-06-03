import React, {  useState } from "react";

import { FidgetSpinner } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";


const PtrotectedRoute = (props) => {
  const { Component } = props;
  let navigation = useNavigate();
  let [loader, setLoader] = useState(false);
  

  return (
    <div>
    {loader ? (
        <Component />
      ) : (
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="black"
        />
      )}</div>
  );
};

export default PtrotectedRoute;
