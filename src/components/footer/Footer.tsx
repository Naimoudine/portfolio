import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-8 mt-16 border-t border-zinc-800">
      <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
        <div className="flex gap-4">
          <Link className="font-semibold hover:text-primary" to="/">
            Home
          </Link>
          <Link className="font-semibold hover:text-primary" to="/about">
            About
          </Link>
          <Link className="font-semibold hover:text-primary" to="/projects">
            Projects
          </Link>
        </div>
        <p className="mt-4 text-sm">
          © 2024 Naïmoudine SAIDI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
