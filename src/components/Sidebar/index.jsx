import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  DocumentPlusIcon,
  CircleStackIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 768);
  window.addEventListener("resize", () => setIsSmall(window.innerWidth < 768));

  const navgiations = [
    // {
    //   text: "Dashboard",
    //   link: "/admin",
    //   addClass: null,
    // },
    {
      icon: <DocumentPlusIcon className="w-6 h-6" />,
      text: "Input Data",
      link: "/admin/input-data",
      addClass: null,
      end: true,
    },
    {
      icon: <CircleStackIcon className="w-6 h-6" />,
      text: "Data Perawatan",
      link: "/admin/data-perawatan",
      addClass: null,
      end: false,
    },
    {
      icon: <ArrowLeftOnRectangleIcon className="w-6 h-6" />,
      text: "Logout",
      link: "/admin/login",
      addClass: null,
      end: false,
    },
  ];

  return (
    <div
      className={`bg-customBlue3 text-white h-screen fixed md:sticky top-0 transition-all duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0 w-3/12" : "-translate-x-full"
      } lg:translate-x-0 lg:flex lg:flex-col px-4 z-[100] max-sm:w-10/12`}
    >
      <div className="flex justify-between items-start">
        <img
          src="/img/LOGO.png"
          alt="logo"
          width={isOpen ? 150 : 48}
          className="py-4 mx-auto mb-6 transition-all duration-300 ease-in-out"
        />
        <button
          className="p-2 mt-4 rounded-full hover:bg-white hover:text-customBlue4 md:hidden"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {navgiations.map((nav, idx) => (
          <NavLink
            key={idx}
            to={nav.link}
            className={({ isActive }) =>
              [
                `p-2 px-3 rounded-md hover:bg-customBlue2/30 flex items-center gap-2 ${nav.addClass}`,
                isActive ? "bg-customBlue2 text-customBlue3" : "",
              ].join(" ")
            }
            end={idx === 0}
            onClick={() => isSmall && toggleSidebar()} // Close sidebar on navigation for small screens
          >
            {nav.icon}
            {isOpen && <span>{nav.text}</span>}
          </NavLink>
        ))}
      </div>
    </div>
    // <div className="bg-customBlue3 py-4 px-6 h-screen text-white sticky top-0">
    //   <div className={`flex ${expanded ? "justify-end" : "justify-center"}`}>
    //     <button
    //       type="button"
    //       className="p-2 rounded-md border border-white hover:bg-white hover:text-customBlue3"
    //       onClick={toggleSidebar}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="w-4 h-4"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    //   <img
    //     src="/img/LOGO.png"
    //     alt="logo"
    //     width={expanded ? 150 : 50}
    //     className={`py-4 transition ease-in-out delay-100 duration-300 ${
    //       expanded ? "mx-10 mb-6" : ""
    //     }`}
    //   />

    //   <div className="flex flex-col gap-4">
    //     {navgiations.map((nav, idx) => (
    //       <NavLink
    //         key={idx}
    //         to={nav.link}
    //         className={({ isActive }) =>
    //           [
    //             `p-2 px-3 rounded-md hover:bg-customBlue2/30 ${nav.addClass}`,
    //             isActive ? "bg-customBlue2 text-customBlue3" : "",
    //             expanded ? "block" : "hidden",
    //           ].join(" ")
    //         }
    //         end={nav.end}
    //         onClick={() => !expanded && toggleSidebar()}
    //       >
    //         {nav.text}
    //       </NavLink>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Sidebar;
