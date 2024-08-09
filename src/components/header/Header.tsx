import Navbar from "./Navbar";

type HeaderProps = {
  setOpenNavModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setOpenNavModal }: HeaderProps) {
  return (
    <div className="py-8">
      <Navbar setOpenNavModal={setOpenNavModal} />
    </div>
  );
}
