import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="justify-content-bottom">
      <div className="footer mt-auto py-3 d-flex justify-content-around align-items-center">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <Link
          to="/"
          className="mx-auto"
          style={{
            display: "inline-block",
          }}
        >
          ← About me
        </Link>
        <div className="mx-auto">
          <a
            href="https://github.com/Dev-Attaway"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github-icon.png" alt="GitHub" className="images" />
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="https://www.linkedin.com/in/nicholas-attaway-a682a12b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkdn.png" alt="Linkdn" className="images" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
