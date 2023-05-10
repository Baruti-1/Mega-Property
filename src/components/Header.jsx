import { useLocation, useNavigate, NavLink } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <h1 className="cursor-pointer" onClick={() => navigate("/")}>
            Mega Property
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
              ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
            >
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
              ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}
            >
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
