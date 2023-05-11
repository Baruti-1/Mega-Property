import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const location = useLocation();
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

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
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            >
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${
                pathMatchRoute("/sign-up") && "text-black border-b-red-500"
              }`}
            >
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
            >
              <NavLink to="/profile">{pageState}</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
