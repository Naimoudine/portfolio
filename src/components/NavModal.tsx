import { NavLink } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

type NavModalProps = {
  openNavModal: boolean;
  setOpenNavModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavModal({
  openNavModal,
  setOpenNavModal,
}: NavModalProps) {
  return (
    <div
      className={
        openNavModal
          ? `absolute backdrop-blur bg-black/80 top-0 left-0 z-[1000] h-full w-full text-zinc-400 px-4 overflow-hidden`
          : `hidden`
      }
    >
      <div className="p-4 mt-4 border rounded-3xl bg-zinc-900 border-zinc-800/90">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button onClick={() => setOpenNavModal(false)}>
            <FontAwesomeIcon className="text-md text-zinc-400" icon={faXmark} />
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="py-4 border-b border-zinc-800/90">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `navModalLink-active` : `navModalLink`
                }
                to="/"
                onClick={() => setOpenNavModal(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="py-4 border-b border-zinc-800/90">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `navModalLink-active` : `navModalLink`
                }
                to="/about"
                onClick={() => setOpenNavModal(false)}
              >
                About
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `navModalLink-active` : `navModalLink`
                }
                to="/projects"
                onClick={() => setOpenNavModal(false)}
              >
                Project
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 py-4 border-t border-zinc-800">
          <a
            href="https://www.linkedin.com/in/naimoudine-saidi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-xl text-zinc-400 hover:text-primary"
              icon={faLinkedinIn}
            />
          </a>
          <a
            href="https://github.com/Naimoudine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-xl text-zinc-400 hover:text-primary"
              icon={faGithub}
            />
          </a>
          <a href="mailto:naimoudinesaidi@gmail.com" className="btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
