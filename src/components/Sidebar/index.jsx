import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navgiations = [
    {
      text: "Input Data",
      link: "/admin",
      addClass: null,
    },
    {
      text: "Data Pelanggan",
      link: "/admin/data-pelanggan",
      addClass: null,
    },
    {
      text: "Logout",
      link: "/admin/login",
      addClass: null,
    },
  ];

  return (
    <div className="bg-customBlue3 py-4 px-6 h-screen text-white sticky top-0">
      <div className="flex justify-end">
        <button
          type="button"
          className="p-2 rounded-md border border-white hover:bg-white hover:text-customBlue3"
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <img
        src="/img/LOGO.png"
        alt="logo"
        width={150}
        className="py-4 mx-10 mb-6"
      />

      <div className="flex flex-col gap-4">
        {navgiations.map((nav, idx) => (
          <NavLink
            key={idx}
            to={nav.link}
            className={({ isActive }) =>
              [
                `p-2 px-3 rounded-md hover:bg-customBlue2/30 ${nav.addClass}`,
                isActive ? "bg-customBlue2 text-customBlue3" : "",
              ].join(" ")
            }
            end={idx === 0}
          >
            {nav.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
