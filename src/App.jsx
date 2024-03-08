// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../src/App.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
