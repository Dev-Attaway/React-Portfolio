// useLocation used to access the current URL location in a React component. It returns an object containing information about the current URL
import { Link, useLocation } from "react-router-dom";
import "../../src/App.css";

function NavTabs() {
  const currentPage = useLocation().pathname;
  // Render the Navigation component

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          About me
        </Link>
      </li>
      <li className="nav-item"></li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/Portfolio" ? "nav-link active " : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        {/* <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link> */}
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
