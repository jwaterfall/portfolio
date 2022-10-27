import { FC } from "react";
import { Inter } from "@next/font/google";

import "../styles/globals.css";

const inter = Inter();

const Layout: FC = ({ children }) => (
  <html className={inter.className}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Jack Waterfall - Software Engineer</title>
    </head>
    <body className="bg-background text-text font-sans scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-lighten-0.05 hover:scrollbar-thumb-lighten-0.1">
      {children}
    </body>
  </html>
);

export default Layout;
