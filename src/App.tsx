import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import NavModal from "./components/NavModal";
import Footer from "./components/footer/Footer";

function App() {
  const [openNavModal, setOpenNavModal] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-zinc-900 text-zinc-400 min-w-screen">
      <div className="wrapper">
        <NavModal
          openNavModal={openNavModal}
          setOpenNavModal={setOpenNavModal}
        />
        <Header setOpenNavModal={setOpenNavModal} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
