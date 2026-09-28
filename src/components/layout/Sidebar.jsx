import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAuthStore from "../../store/authStore";

import "../styles/sidebar.css";

export default function Sidebar() {

  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", isOpen);

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isOpen]);

  return (
    <>
    {/* Mobile Menu Button */}
<button
  type="button"
  className="mobile-menu-btn"
  onClick={openMenu}
  aria-label="Open menu"
>
  <span>☰</span>
</button>

{/* Mobile Overlay */}
{isOpen && (
  <div
    className="sidebar-overlay"
    onClick={closeMenu}
  ></div>
)}

<aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

        {/* SIDEBAR */}
        <div>
          <div className="side-brand">
            <div className="side-brand-icon">✧</div>

            <div>
              <strong>Ziyaarah</strong>
              <span>Journey Planner</span>
            </div>
          </div>

          <nav className="sidebar-nav">
            <Link to="/dashboard" onClick={closeMenu}>
              <span className="nav-icon">⌂</span>
              Dashboard
            </Link>

            <Link to="/trip-planner" onClick={closeMenu}>
              <span className="nav-icon">▣</span>
              Trip Planner
            </Link>

            <Link to="/ritual-tracker" onClick={closeMenu}>
              <span className="nav-icon">✓</span>
              Ritual Tracker
            </Link>

            <Link to="/resources" onClick={closeMenu}>
              <span className="nav-icon">▤</span>
              Resources
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          {/* User Profile */}
          <div className="user-profile">
            <div className="user-avatar">
              {user?.fullName?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="user-info">
              <h4>{user?.fullName || "User"}</h4>
              <p>{user?.email || "No email"}</p>
            </div>
          </div>

          {/* Sign Out */}
          <button
            type="button"
            className="sign-out-btn"
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}

