import { Outlet, Link } from "react-router-dom";
import "../css/Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/drinks">Drink Menu</Link>
          </li>
          <li>
            <Link to="/orders">View Orders</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;