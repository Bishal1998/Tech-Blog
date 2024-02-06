import React, { useState, useRef, useEffect } from "react";
import { DesktopLogo, MobileLogo, LaptopLogo } from "../../assets/Logo";
import { navItems } from "../data";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { signOutFailure, signOutSuccess } from "../../store/authSlice";
import axios from "axios";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickRef = useRef(null);

  const handleProfileClick = () => {
    setProfileActive((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (clickRef.current && !clickRef.current.contains(e.target)) {
      setProfileActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [profileActive]);

  const handleSignOut = async (e) => {
    e.preventDefault();
    setProfileActive(false);
    try {
      const res = await axios.post("/api/user/signout");
      if (res.status === 200) {
        navigate("/login");
        dispatch(signOutSuccess());
      }
    } catch (error) {
      dispatch(signOutFailure(error.message));
    }
  };

  return (
    <section className="bg-dark-10 p-4">
      <nav className="lg:px-20 flex items-center justify-between mx-auto">
        <div className="md:hidden">
          <MobileLogo />
        </div>
        <div className="hidden md:flex 2xl:hidden">
          <LaptopLogo />
        </div>
        <div className="hidden 2xl:flex">
          <DesktopLogo />
        </div>
        <div className="lg:hidden" onClick={() => setNavActive(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25 10.0625C4.25 9.4757 4.7257 9 5.3125 9H28.6875C29.2743 9 29.75 9.4757 29.75 10.0625C29.75 10.6493 29.2743 11.125 28.6875 11.125H5.3125C4.7257 11.125 4.25 10.6493 4.25 10.0625ZM4.25 17.5C4.25 16.9132 4.7257 16.4375 5.3125 16.4375H28.6875C29.2743 16.4375 29.75 16.9132 29.75 17.5C29.75 18.0868 29.2743 18.5625 28.6875 18.5625H5.3125C4.7257 18.5625 4.25 18.0868 4.25 17.5ZM15.9375 24.9375C15.9375 24.3507 16.4132 23.875 17 23.875H28.6875C29.2743 23.875 29.75 24.3507 29.75 24.9375C29.75 25.5243 29.2743 26 28.6875 26H17C16.4132 26 15.9375 25.5243 15.9375 24.9375Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="hidden lg:flex text-gray-50 font-inter items-center gap-12 text-lg justify-center ">
          {navItems.map((item) => {
            const { id, title, link } = item;
            return (
              <NavLink
                to={link}
                key={id}
                className={({ isActive }) =>
                  isActive
                    ? " text-white bg-dark-8 rounded-xl p-4 "
                    : "hover:text-gray-60 p-4"
                }
              >
                {title}
              </NavLink>
            );
          })}
        </div>
        <div className="hidden lg:flex">
          {currentUser ? (
            <img
              src={currentUser.profilePicture}
              alt={currentUser.username}
              className="rounded-full w-12 h-12 cursor-pointer object-cover"
              onClick={handleProfileClick}
              ref={clickRef}
            />
          ) : (
            <Link to="/login">
              <button className="font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl py-4 px-6">
                Login
              </button>
            </Link>
          )}
        </div>

        {profileActive && (
          <div className="rounded-xl bg-dark-10 border border-dark-15 p-5 gap-4 absolute top-36 right-20 z-50">
            <div className="font-inter text-sm lg:text-base 2xl:text-lg text-gray-60 space-y-2">
              <p>{currentUser.username}</p>
              <p>{currentUser.email}</p>
            </div>
            <div className="w-full h-1 border-t border-dark-15" />
            <div className="font-inter text-lg lg:text-base 2xl:text-lg text-white font-medium space-y-2 pt-2">
              <Link to={"/dashboard?tab=profile"}>Profile</Link>
              <p className="cursor-pointer" onClick={handleSignOut}>
                Log Out
              </p>
            </div>
          </div>
        )}

        {/* mobile menu overlay */}
        {navActive && (
          <nav className="absolute z-50 top-0 right-0 bg-dark-10 h-full w-1/2 ">
            <div
              className="text-gray-50 absolute right-5 top-5"
              onClick={() => setNavActive(false)}
            >
              <AiOutlineCloseCircle size={30} />
            </div>
            <div className="lg:hidden text-gray-50 font-inter gap-12 text-lg flex flex-col items-center justify-center h-full ">
              {navItems.map((item) => {
                const { id, title, link } = item;
                return (
                  <NavLink
                    to={link}
                    key={id}
                    className={({ isActive }) =>
                      isActive
                        ? " text-white  mx-auto bg-dark-8 rounded-xl p-4 "
                        : "p-4"
                    }
                  >
                    {title}
                  </NavLink>
                );
              })}

              <div className="lg:hidden">
                {currentUser ? (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="w-full border-t border-dark-15 h-1" />
                    {currentUser.isAdmin && (
                      <NavLink
                        to="/dashboard?tab=create-post"
                        className={({ isActive }) =>
                          isActive
                            ? " text-white  mx-auto bg-dark-8 rounded-xl p-4 text-lg   "
                            : "p-4 text-lg"
                        }
                      >
                        Create Post
                      </NavLink>
                    )}
                    {currentUser.isAdmin && (
                      <NavLink
                        to="/dashboard?tab=posts"
                        className={({ isActive }) =>
                          isActive
                            ? " text-white  mx-auto bg-dark-8 rounded-xl p-4 text-lg   "
                            : "p-4 text-lg"
                        }
                      >
                        Posts
                      </NavLink>
                    )}
                    <NavLink
                      to="/dashboard?tab=profile"
                      className={({ isActive }) =>
                        isActive
                          ? " text-white  mx-auto bg-dark-8 rounded-xl p-4 text-lg   "
                          : "p-4 text-lg"
                      }
                    >
                      Profile
                    </NavLink>
                    <Link to="/login" onClick={handleSignOut}>
                      <button className="font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl py-4 px-6">
                        Logout
                      </button>
                    </Link>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="font-inter text-lg text-dark-8 font-medium bg-yellow-55 rounded-xl py-4 px-6">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
      </nav>
    </section>
  );
};
export default Navbar;
