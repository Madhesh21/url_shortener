import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <h2 className="text-3xl font-bold">BlinkLink</h2>

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li>
                  <button className="text-cyan-500 py-2 px-4 hover:opacity-75 transition-all duration-150 cursor-pointer">
                    Features
                  </button>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <button className="text-cyan-500 py-2 px-4 hover:opacity-75 transition-all duration-150 cursor-pointer">
                    Pricing
                  </button>
                </li>
                <li>
                  <button className="text-cyan-500 py-2 px-4 hover:opacity-75 transition-all duration-150 cursor-pointer">
                    Resources
                  </button>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-cyan-700 text-white text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <button>Features</button>
                  </li>
                  <li className="my-5">
                    <button>Pricing</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}
