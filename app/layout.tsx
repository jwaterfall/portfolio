import { FC } from "react";
import { Inter } from "@next/font/google";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "../styles/globals.css";

const inter = Inter();

const Layout: FC = ({ children }) => (
  <html className={inter.className}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Jack Waterfall - Software Engineer</title>
    </head>
    <body className="bg-background text-text font-sans scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-lighten-0.05 hover:scrollbar-thumb-lighten-0.1">
      <div className="flex-col items-center gap-4 after:w-0.5 after:h-16 after:bg-textSecondary fixed left-8 bottom-0 hidden xl:flex">
        <a href="https://github.com/jwaterfall" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 text-textSecondary transition-colors hover:text-secondary cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/jwaterfall" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 text-textSecondary transition-colors hover:text-secondary cursor-pointer" />
        </a>
        <a href="mailto:jack.a.waterfall@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="w-6 h-6 text-textSecondary transition-colors hover:text-secondary cursor-pointer" />
        </a>
      </div>
      {children}
    </body>
  </html>
);

export default Layout;
