import React from "react";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <section>
      <div className="relative flex flex-col">
        {/* <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {title}
          </span>
        </h2> */}
        <p
          className="text-base max-w-3xl p-4 text-slate-800 dark:text-slate-100 font-thin"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      </div>
    </section>
  );
}

export default ComingSoonContent;
