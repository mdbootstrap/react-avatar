import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function WithContent() {
  return (
    <MDBContainer className="my-5 d-flex flex-column justify-content-center align-items-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        className="rounded-circle mb-3"
        style={{ width: "150px" }}
        alt="Avatar"
      />

      <h5 className="mb-2">
        <strong>John Doe</strong>
      </h5>
      <p className="text-muted">
        Web designer <span className="badge bg-primary">PRO</span>
      </p>
    </MDBContainer>
  );
}

export default WithContent;
