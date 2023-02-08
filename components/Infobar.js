export default function Infobar() {
  return (
    <div className="m-12 p-12 bg-banana text-my-green w-100 min-h-screen rounded-2xl">
    
      <div className="py-6 h-screen flex justify-between gap-10">
        <div className="flex-1 flex flex-col justify-between">
          <p className="w-36">It started with a simple question.</p>

          <h1 className="text-5xl w-100 font-extrabold">
            Why do some fruits <br /> and vegetables last longer than
            <br /> others?
          </h1>
        </div>
        <div className="flex-1 rounded-xl flex items-center justify-center">
          <button className="bg-banana-400 px-8 py-3 rounded-full">
            watch
          </button>
        </div>
      </div>
    </div>
  );
}
