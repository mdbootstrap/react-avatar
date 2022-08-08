import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Square() {
  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
        className="rounded-3"
        style={{ width: "150px" }}
        alt="Avatar"
      />
    </MDBContainer>
  );
}

export default Square;
