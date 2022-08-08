import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Basic() {
  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle"
        alt="Avatar"
      />
    </MDBContainer>
  );
}

export default Basic;
