import '../../styles/carregando.css'

export default function VitrineCarregando(){
  const a = Array(1,2,3,4,5,6,7,8)

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {a.map((item, index) => (
        <div key={index}
          className="flex shimmer flex-1 w-full max-w-[24rem] min-w-[300px] rounded-xl h-[520px] overflow-hidden"
        >
          <div className="bg-zinc-100 w-full h-[250px] self-end rounded-lg p-6 flex flex-col justify-between">

            <div className="animate-pulse w-[80%] h-9 rounded-md bg-zinc-200"></div>
            <div className="animate-pulse w-[40%] h-9 rounded-md bg-zinc-200"></div>

            <div className="animate-pulse w-full h-12 rounded-md bg-zinc-200">
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}