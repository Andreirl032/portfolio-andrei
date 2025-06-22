"use client"

import { useTheme } from "next-themes";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface Reference{
ref:MutableRefObject<null | HTMLDivElement>
}

const Header = ({ref}: Reference) => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme();
  useEffect(()=>{
    setMounted(true);
    console.log(theme);
  },[theme])
  return (
    <header className="flex left-3 top-3 z-10 sticky bg-[#e6e6e6] dark:bg-[#122131] items-center justify-between mx-3 mt-3 rounded-lg border-black dark:border-gray-600 border-[2px] h-20 w-auto flex-row text-black dark:text-white shadow-xl">
      <div className="flex flex-row justify-around min-w-[70%]">
        <button onClick={()=>ref.current?.scrollIntoView({behavior:'smooth'})}>
          <h2 className="text-xl">Início</h2>
          </button>
        <h2 className="text-xl">Tecnologias</h2>
        <h2 className="text-xl">Projetos</h2>
        <h2 className="text-xl">Contato</h2>
      </div>
       {!mounted ? null :
      <div className="mr-10 inline-flex items-center">
  <span className="me-3 text-md font-medium text-black dark:text-gray-300">Modo claro</span>
      <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" checked={theme==="dark" ? true : false} className="sr-only peer"
        onChange={() => {
          if (theme === 'dark') {
            return setTheme('light')
          }
          return setTheme('dark')
        }}
        />
  <div className="transition relative w-[3.45rem] h-7 bg-gray-500 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.19rem] after:start-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.4rem] after:w-[1.4rem] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
  <span className="ms-3 text-md font-medium text-black dark:text-gray-300">Modo escuro</span>
</div>}
    </header>
  );
};

export default Header;
