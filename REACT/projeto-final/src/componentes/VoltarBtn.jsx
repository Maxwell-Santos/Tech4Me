import { Link } from "react-router-dom";

export function Voltar({toHome}) {
  return (
    <Link
      to={toHome ? '/' : '/vitrine'}
      className="fixed left-5 top-5 p-2 bg-white rounded-full hover:-translate-x-1 transition-all shadow-md z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/>
      </svg>
    </Link>
  )
}
