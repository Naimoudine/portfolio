import { NavLink } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          ? `absolute backdrop-blur bg-black/80 top-0 left-0 z-60 h-screen w-screen text-zinc-400 px-4`
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
            <li className="py-2 border-b border-zinc-800/90">
              <NavLink className="navModalLink" to="">
                Home
              </NavLink>
            </li>
            <li className="py-2 border-b border-zinc-800/90">
              <NavLink className="navModalLink" to="">
                About
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink className="navModalLink" to="">
                Project
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
