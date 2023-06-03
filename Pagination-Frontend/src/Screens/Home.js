import React, { useEffect, useState } from "react";
import SmCard from "../Components/Smcard";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FidgetSpinner } from "react-loader-spinner";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
  
      setLoading(true);
    
    fetch(`http://localhost:2000/users?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, users }) => {
        
        setUsers(users);
        setNumberOfPages(totalPages);
        setLoading(false);
      });
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className="container">
      <h3 className="text-center text-primary">
        Page {pageNumber + 1} of {numberOfPages}
      </h3>
      <div className="row">
        {loading ? (
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["blue", "black", "red"]}
            backgroundColor="#F4442E"
          />
        ) : (
          users.map((e) => (
            <div className="col-md-4 my-2">
              <SmCard
                Name={e.Name}
                FatherName={e.FatherName}
                Email={e.Email}
                Age={e.Age}
              />
            </div>
          ))
        )}
      </div>
      <div className="text-center my-2">
        <Button variant="contained" onClick={gotoPrevious}>
          <ArrowBackIcon />
          Previous
        </Button>
        {pages.map((pageIndex) => (
          <Button
            variant="outlined"
            key={pageIndex}
            onClick={() => setPageNumber(pageIndex)}>
            {pageIndex + 1}
          </Button>
        ))}
        <Button variant="contained" onClick={gotoNext}>
          Next
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default Home;
