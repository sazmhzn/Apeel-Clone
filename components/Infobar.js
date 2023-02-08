export default function Infobar() {
  return (
    <div className="m-12 p-12 bg-offWhite w-100 min-h-screen rounded-2xl">
      <div className="py-6 h-screen bg-blue-200 flex justify-between gap-10">
        <div className="flex-1 flex flex-col justify-between">
          <p className="w-36">It started with a simple question.</p>

          <h1 className="text-4xl w-96">
            Why do some fruits and vegetables
            last longer than others?
          </h1>
        </div>
        <div className="flex-1">
            video here
        </div>
      </div>
    </div>
  );
}
