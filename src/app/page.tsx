import Image from "next/image";
import Header from "./components/Header";
import myself from "../../public/assets/eu.png"

export default function Home() {
  return (
    <>
      <body>
        <Header />
        <main className="mt-16" data-aos="fade-in">
          <div className="flex flex-row items-center justify-between">
          <div className="ml-12">
          <h3 className="text-xl">Bem vindo!</h3>
          <h1 className="font-bold text-4xl">Eu sou Andrei Ramos Lopes</h1>
          <h2 className="text-2xl">Desenvolvedor Front-end</h2>
          </div>
          <div className="mr-12">
          <Image width={444} height={444} src={myself} alt="myself" className="rounded-3xl"></Image>
          </div>
          </div>
        </main>
      </body>
    </>
  );
}
