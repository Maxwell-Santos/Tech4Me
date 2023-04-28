import React from "react"
import "../../styles/carregando.css"

export function DetalhesCarregando() {
  return (
    <div className="shimmer bg-zinc-100 flex items-center justify-center gap-8 flex-wrap p-5 min-[430px]:rounded-2xl">
      <div className="bg-zinc-300 w-[350px] h-[350px] rounded-xl"></div>

      <div className="max-[430px]:mb-24">
        <div className="max-[750px]:text-center text-start"></div>

          <div className="w-[550px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
          <div className="w-[500px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
          <div className="w-[400px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
          <div className="w-[550px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
        <button className="bg-zinc-300 p-7 mt-10 rounded-md w-full m-w-[300px]"></button>
      </div>
    </div>
  )
}
