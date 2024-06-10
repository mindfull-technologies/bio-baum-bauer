import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/sponsor">Sponsor</Link>
      <Link to="/Faq">FAQ</Link>

    </div>
  );
};
export default Navbar;
