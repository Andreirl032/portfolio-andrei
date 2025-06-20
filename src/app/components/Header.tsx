"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme();
  useEffect(()=>{
    setMounted(true);
    console.log(theme);
  },[theme])
  return (
    <header className="flex items-center justify-between mx-3 mt-3 rounded-lg border-black dark:border-gray-600 border-[1px] h-16 w-auto flex-row text-black dark:text-white shadow-xl">
      <div className="flex flex-row justify-around min-w-[60%]">
        <h2>Início</h2>
        <h2>Tecnologias</h2>
        <h2>Projetos</h2>
        <h2>Contato</h2>
      </div>
       {!mounted ? null :
      <div className="mr-10 inline-flex items-center">
  <span className="me-3 text-sm font-medium text-[#e6e6e6] dark:text-gray-300">Modo claro</span>
      <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"
        onChange={() => {
          if (theme === 'dark') {
            return setTheme('light')
          }
          return setTheme('dark')
        }}
        />
  <div className="transition relative w-[3.45rem] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.19rem] after:start-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.4rem] after:w-[1.4rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
  <span className="ms-3 text-sm font-medium text-[#e6e6e6] dark:text-gray-300">Modo escuro</span>
</div>}
    </header>
  );
};

export default Header;
