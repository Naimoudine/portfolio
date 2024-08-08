import { Outlet, Link } from "react-router-dom";
import Header from "./components/header/Header";
import NavModal from "./components/NavModal";
import { useState } from "react";

function App() {
  const [openNavModal, setOpenNavModal] = useState(false);

  return (
    <div className="bg-zinc-900 text-white min-h-screen min-w-screen flex flex-col relative">
      <div className="wrapper">
        <NavModal
          openNavModal={openNavModal}
          setOpenNavModal={setOpenNavModal}
        />
        <Header setOpenNavModal={setOpenNavModal} />
        <main>
          <Outlet />
        </main>
        <footer>
          <div>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </div>
            <p>© 2024 Naïmoudine SAIDI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
