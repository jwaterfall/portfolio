"use client";

import { FC } from "react";

import Animate from "../components/Animate";
import useIsScrolledToTop from "../hooks/useIsScrolledToTop";

const Navbar: FC = () => {
  const isScrolledToTop = useIsScrolledToTop();

  return (
    <Animate variant="fade-down" triggered={isScrolledToTop}>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-8 px-16 flex-col md:flex-row gap-4">
        <a href="/" className="font-code">
          <span className="text-primary">&#60;</span>Jack-Waterfall<span className="text-primary">/&#62;</span>
        </a>
        <nav className="flex gap-8">
          <a href="#about" className="font-code text-sm text-textSecondary hover:text-text transition-colors">
            <span className="text-primary">01.</span> About
          </a>
          <a href="#skills" className="font-code text-sm text-textSecondary hover:text-text transition-colors">
            <span className="text-primary">02.</span> Skills
          </a>
          <a href="#projects" className="font-code text-sm text-textSecondary hover:text-text transition-colors">
            <span className="text-primary">03.</span> Projects
          </a>
        </nav>
      </header>
    </Animate>
  );
};

export default Navbar;
