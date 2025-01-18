import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import GARA_Primary_Logo from '../../../public/GARA_Primary_Logo.png';
import Image from 'next/image';

function Navigation() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
      <div className="flex-shrink-0">
        <Image src={ GARA_Primary_Logo } alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className="mx-auto flex sm:justify-center space-x-4">
        {[
          ['Home', '/'],
          ['Version 1', '/version1'],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-100 dark:text-slate-100 dark:hover:text-slate-800 dark:hover:bg-zinc-300"
          >
            {title}
          </a>
        ))}
        <ThemeSwitch />
      </nav>
    </div>
  )
}

export default Navigation