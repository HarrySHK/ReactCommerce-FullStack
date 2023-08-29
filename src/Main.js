import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="my_bt">
      <a
        href="/"
        className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out bg-black border-none rounded-full shadow-xl border-white/50 group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-lime-100 duration-300 translate-x-full bg-gray-900 group-hover:translate-x-0 ease">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full font-bold transition-all duration-300 transform font-Arial text-white/80 group-hover:-translate-x-full ease">
          {/* Main Page */}
          <marquee direction="left" behavior="scroll" scrollamount="5">
            Hit button to target Mobtop Category Page !
          </marquee>
        </span>
        <span className="relative invisible">Button Text</span>
      </a>
    </div>
  );
}

export default Main;
