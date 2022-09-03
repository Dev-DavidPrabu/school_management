import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="">Students Listing</h4>
        </div>
        <div>
          <Link to={"/add"}>
            <Button className="btn btn-success">Add Student</Button>
          </Link>
          <Button className="btn btn-warning m-1">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
