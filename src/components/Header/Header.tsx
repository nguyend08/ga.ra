import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitename, sitetagline, siteurl } = data;
  return (
    <>
    <header>
      <div className="lex items-center justify-between px-4 py-2">
        {/* <a
          className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
          href={siteurl}
          rel="noopener noreferrer"
        > */}
          <div className="flex flex-col">
            <h1 className="text-2xl uppercase lgtext-4xl text-gara-theme-orange font-semibold	">
              {sitename}
            </h1>
            <p className="text-xl font-xl text-slate-800 dark:text-slate-100">
              {sitetagline}
            </p>
          </div>
        {/* </a> */}
      </div>
    </header>
    </>
  );
}

export default Header;
