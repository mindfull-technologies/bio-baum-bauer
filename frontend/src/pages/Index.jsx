import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DesktopNavbar from "../components/DesktopNavbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const Index = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768); // 768px is a common breakpoint for mobile screens
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainStyle = {
    paddingTop: isNavbarFixed ? "70px" : "0",
  };

  return (
    <div>
      <header>
        {isMobileScreen ? (
          <MobileNavbar />
        ) : (
          <DesktopNavbar
            isNavbarFixed={isNavbarFixed}
            setIsNavbarFixed={setIsNavbarFixed}
          />
        )}
      </header>
      <main className="page" style={mainStyle}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
