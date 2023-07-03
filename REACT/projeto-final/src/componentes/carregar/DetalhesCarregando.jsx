import "../../styles/carregando.css"

export default function DetalhesCarregando() {
  return (
    <div className="shimmer bg-zinc-100 flex justify-center gap-8 flex-wrap p-5 min-[430px]:rounded-2xl w-full max-w-[998px] max-[995px]:flex-col max-[995px]:max-w-[500px]">
      <div className="bg-zinc-300 w-full max-w-[350px] h-[350px] rounded-xl max-[995px]:mx-auto"></div>

      <div className="max-[430px]:mb-24 flex-1 w-full flex flex-col max-[995px]:items-center">

          <div className="w-full max-w-[400px] p-8 bg-zinc-300 rounded-sm mb-6"></div>
          <div className="w-full max-w-[550px] p-2 bg-zinc-300 rounded-sm"></div>
          <div className="w-full max-w-[500px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
          <div className="w-full max-w-[400px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
          <div className="w-full max-w-[550px] p-2 bg-zinc-300 rounded-sm mt-2"></div>
          <div className="w-full max-w-[550px] p-2 bg-zinc-300 rounded-sm mt-2 mb-6"></div>

          <div className="w-full max-w-[200px] p-4 bg-zinc-300 rounded-sm "></div>

          <div className="flex gap-2 justify-between">
            <div className="bg-zinc-300 p-7 mt-10 rounded-md w-[160px] self-end"></div>
            <div className="bg-zinc-300 p-7 mt-10 rounded-md w-full max-w-[300px] "></div>
          </div>
      </div>
    </div>
  )
}
