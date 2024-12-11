import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export function HomeScreen() {
  useSmoothScroll();

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 text-center py-12 px-4">
      <h1 className="font-bold text-3xl sm:text-4xl text-purple-700">
        Build Your Dream PC!
      </h1>
      <div className="w-fit">
        <a href="#pc_build" target="_self" className="w-full">
          <button className="!w-fit bg-purple-500 text-white font-semibold rounded-full py-2 px-6 mt-6 flex items-center mx-auto hover:bg-purple-600">
            Start Building!
          </button>
        </a>
      </div>
    </div>
  );
}
