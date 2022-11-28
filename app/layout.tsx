import { FC } from "react";
import { Fira_Code, Gothic_A1 } from "@next/font/google";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Navbar from "../components/Navbar";
import "../styles/globals.css";

const gothicA1 = Gothic_A1({
  weight: ["400", "600", "700"],
  variable: "--font-gothic-a1",
});

const firaCode = Fira_Code({
  weight: ["400", "500"],
  variable: "--font-fira-code",
});

const Layout: FC = ({ children }) => (
  <html className={`scroll-smooth ${gothicA1.variable} ${firaCode.variable}`}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Jack Waterfall - Software Engineer</title>
    </head>
    <body className="bg-background text-text font-sans scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-lighten-0.05 hover:scrollbar-thumb-lighten-0.1">
      <Navbar />
      <div className="flex-col items-center gap-4 after:w-0.5 after:h-16 after:bg-textSecondary fixed left-16 bottom-0 hidden xl:flex">
        <a href="https://github.com/jwaterfall" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 text-textSecondary transition-colors hover:text-primary cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/jwaterfall" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 text-textSecondary transition-colors hover:text-primary cursor-pointer" />
        </a>
        <a href="mailto:jack.a.waterfall@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="w-6 h-6 text-textSecondary transition-colors hover:text-primary cursor-pointer" />
        </a>
      </div>
      {children}
    </body>
  </html>
);

export default Layout;
