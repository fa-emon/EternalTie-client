// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between">
//       <div className="flex items-center space-x-4 w-[40p]">
//         <img src="https://ibb.co/tZW7szh" alt="Logo" className="w-20 h-20" />
//         <NavLink>
//           <button className="btn btn-ghost">Home</button>
//         </NavLink>
//       </div>

//       <div>
//         <NavLink>
//           <button className="btn btn-ghost">Home</button>
//         </NavLink>
//         <NavLink>
//           <button className="btn btn-ghost">Biodatas</button>
//         </NavLink>
//         <NavLink>
//           <button className="btn btn-ghost">About Us</button>
//         </NavLink>
//         <NavLink>
//           <button className="btn btn-ghost">Contact</button>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 w-1/3">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="w-20 h-20"
          />
          <button className="btn btn-ghost">
            <span className="text-lg font-bold">Matrimony Website</span>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            exact
            className="hover:underline"
            activeClassName="text-blue-500"
          >
            <button className="btn btn-ghost">Home</button>
          </NavLink>
          <NavLink
            to="/biodatas"
            className="hover:underline"
            activeClassName="text-blue-500"
          >
            <button className="btn btn-ghost">Biodatas</button>
          </NavLink>
          <NavLink
            to="/about"
            className="hover:underline"
            activeClassName="text-blue-500"
          >
            <button className="btn btn-ghost">About Us</button>
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:underline"
            activeClassName="text-blue-500"
          >
            <button className="btn btn-ghost">Contact</button>
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden text-center mt-2`}
      >
        <NavLink
          to="/"
          exact
          className="block py-2"
          activeClassName="text-blue-500"
          onClick={toggleMenu}
        >
          <button className="btn btn-ghost w-full">Home</button>
        </NavLink>
        <NavLink
          to="/biodatas"
          className="block py-2"
          activeClassName="text-blue-500"
          onClick={toggleMenu}
        >
          <button className="btn btn-ghost w-full">Biodatas</button>
        </NavLink>
        <NavLink
          to="/about"
          className="block py-2"
          activeClassName="text-blue-500"
          onClick={toggleMenu}
        >
          <button className="btn btn-ghost w-full">About Us</button>
        </NavLink>
        <NavLink
          to="/contact"
          className="block py-2"
          activeClassName="text-blue-500"
          onClick={toggleMenu}
        >
          <button className="btn btn-ghost w-full">Contact</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
