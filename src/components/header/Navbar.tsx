import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moi from "../../assets/images/moi.jpg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type NavbarProps = {
  setOpenNavModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ setOpenNavModal }: NavbarProps) {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-4">
        <Link to="/">
          <img
            className="w-8 h-8 rounded-full"
            src={moi}
            alt="profil pic of myself"
          />
        </Link>
        <ul className="items-center hidden gap-4 px-4 py-1 ml-16 border rounded-3xl sm:flex bg-zinc-800 border-zinc-600/90">
          <li className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-primary relative after:absolute after:-bottom-[0.35rem] after:left-0 after:content-[''] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-primary/0 after:via-primary/60 after:to-primary/0`
                  : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-primary relative after:absolute after:-bottom-[0.35rem] after:left-0 after:content-[''] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-primary/0 after:via-primary/60 after:to-primary/0`
                  : ""
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-primary relative after:absolute after:-bottom-[0.35rem] after:left-0 after:content-[''] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-primary/0 after:via-primary/60 after:to-primary/0`
                  : ""
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="items-center hidden gap-4 sm:flex">
        <Link to="">Linkedin</Link>
        <button className="btn">Contact</button>
      </div>
      <button
        className="block btn sm:hidden"
        onClick={() => setOpenNavModal(true)}
      >
        Menu
        <FontAwesomeIcon className="ml-2 text-xs" icon={faChevronDown} />
      </button>
    </nav>
  );
}
