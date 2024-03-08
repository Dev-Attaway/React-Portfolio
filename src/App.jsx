// Import the Outlet component from 'react-router-dom' which is responsible for rendering child routes
import { Outlet } from "react-router-dom";

// Import your custom components for navigation, footer, header, and CSS file
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../src/App.css"; // Import your CSS file for styling

// Define the main App component
function App() {
  // The App component renders the header, navigation, main content (determined by Outlet), and footer
  return (
    <>
      <Header /> {/* Render the header component */}
      <Nav /> {/* Render the navigation component */}
      <main>
        <Outlet />{" "}
        {/* Outlet component renders child routes based on the URL */}
        <Footer /> {/* Render the footer component */}
      </main>
    </>
  );
}

export default App; // Export the App component for use in other parts of your application
