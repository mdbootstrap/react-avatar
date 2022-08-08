import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/WithShadows">
        <MDBBtn className="ms-3 mt-3">With Shadows</MDBBtn>
      </Link>
      <Link to="/Square">
        <MDBBtn className="ms-3 mt-3">Square</MDBBtn>
      </Link>
      <Link to="/WithContent">
        <MDBBtn className="ms-3 mt-3">With Content</MDBBtn>
      </Link>
      <Link to="/InsideNavbar">
        <MDBBtn className="ms-3 mt-3">Inside Navbar</MDBBtn>
      </Link>
      <Link to="/Carousel">
        <MDBBtn className="ms-3 mt-3">Carousel</MDBBtn>
      </Link>
      <Link to="/Testimonials">
        <MDBBtn className="ms-3 mt-3">Testimonials</MDBBtn>
      </Link>
      <Link to="/Profile">
        <MDBBtn className="ms-3 mt-3">Profile</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
