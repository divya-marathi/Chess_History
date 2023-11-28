import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Navigator() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [isLogged, setIslogged] = useState(true);

  useEffect(() => {
    if (token) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [navigate, token]);

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <section className="">
        <nav className="navbar navbar-light bg-danger justify-content-between px-5 ">
          <Link to="/" className="navbar-brand shadow-lg p-2 text-white">
            Dashboard
          </Link>

          {isLogged ? (
            <Link to="/" onClick={logout}>
              <button className="navbar-item btn btn-outline-success bg-white  ">
                Logout
              </button>
            </Link>
          ) : (
            <Link
              to="/signin"
              className="navbar-item btn btn-outline-success bg-white "
            >
              Sign Up
            </Link>
          )}
        </nav>
        <Outlet />
      </section>
    </>
  );
}

export default Navigator;
