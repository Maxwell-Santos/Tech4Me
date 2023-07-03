import { Link } from "react-router-dom"

export default function Cabecalho() {
  return (
    <header
      className="bg-white/80 shadow filter backdrop-blur-sm fixed top-0 right-0 max-[430px]:bottom-0 max-[430px]:top-auto max-[430px]:left-0 z-50 p-4 px-6 rounded-full m-5"
    >
      <nav className="flex items-center justify-center gap-5 font-normal text-zinc-700 text-sm">
        <Link to="/form" className="hover:text-nav-link-hover transition-all" title="link para enviar seu feedback da loja">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          enviar Feedback
        </Link>

        <Link to="/sobre" className="hover:text-nav-link-hover transition-all" title="link da página sobre">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline mr-1"
          >
            <path
              strokeLinecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>
          sobre
        </Link>
      </nav>
    </header>
  )
}
