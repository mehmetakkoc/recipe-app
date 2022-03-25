import { Nav, Logo, MenuLink } from "./NavbarStyles";
import { Link } from "react-router-dom";

const myNavbar = () => {
  return (
    <Nav>
      <div>
        <i>{"<Clarusway"}</i>
        <span>RECIPE</span>
      </div>
      <div>
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
      </div>
    </Nav>
  );
};

export default myNavbar;
