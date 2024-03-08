import { Link, useLocation } from "react-router-dom";
import "../styles/About.css"

export default function About() {
  const currentPage = useLocation().pathname;

  return (
<div className="about d-flex justify-content-center align-items-center flex-wrap">
  <div className="mx-5">
    <h1 className="p-5">About Me</h1>
    <img
      src="Tech-Priest.png"
      alt="Tech-Priest"
      className="rounded-circle m-4"
      style={{ maxWidth: "25%", minWidth: "10rem" }}
    />
  </div>
  <div className="container flex my-2">
    <p>
      Hello! My name is Nicholas Attaway and I am a junior web Developer. I
      have a passion for technology, web development, and coding.
    </p>
    <p>
      I am enrolled at Michigan State University with a certification in Full
      Stack Web Development.
    </p>
    <p>
      In my free time, I love to read science fiction. I also enjoy spending
      time with my family and friends, exploring new places, and learning new
      things.
    </p>
    <p>
      Feel free to reach out to me at my
      <Link
        to="/Contact"
        className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
        style={{
          display: "inline-block",
          color: "rgba(var(--bs-link-color-rgb)",
        }}
      >
        &nbsp;contact page&nbsp;
      </Link>
      if you have any questions or would like to connect!
    </p>
  </div>
</div>
  );
}
