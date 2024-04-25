import ProgrammingCat from "../assets/programmingcat.jpg";

const HomePage = () => {
  return (
    <main className="relative flex flex-col justify-center items-center">
      <div
        className="relative flex flex-col w-full h-[52.5rem] justify-center items-center bg-cover bg-no-repeat border-b-[2px] border-b-black gap-12"
        style={{ backgroundImage: `url(${ProgrammingCat})` }}
      >
        <div className="flex flex-col text-white mt-4">
          <h1 className="text-7xl font-encode font-bold">code.</h1>
          <div className="font-open">
            <h1 className="text-4xl font-bold mt-1">
              A Forum to Share Knowledge
            </h1>
            <h2 className="text-md mt-2">
              Imagine a forum where programmers can share their skills and help
              each other out.
              <br />
              That's what <span>code is all about.</span>
            </h2>
            <button className="w-[8rem] h-[3rem] mt-3 text-white font-bold rounded-md transition ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <hr className="relative flex justify-center items-center w-full h-[6rem] bg-[#f3f0f0]" />

      <div className="absolute flex justify-between items-center w-[40rem] h-[5rem] bg-[#e7e4e2] rounded-2xl bottom-[3.5rem] border-2 border-none text-md text-black font-open font-bold px-4">
        <div className="w-[12rem] border-r-[2px] border-r-[#bfb9b8]">
          <span className="text-2xl font-bold">10+</span>
          <br />
          Active Forums
        </div>
        <div className="w-[12rem] border-r-[2px] border-r-[#bfb9b8]">
          <span className="text-2xl font-bold">5+</span>
          <br />
          Active Users
        </div>
        <div className="w-[12rem] border-r-[2px] border-r-[#bfb9b8]">
          <span className="text-2xl font-bold">∞</span>
          <br />
          Questions
        </div>
        <div className="w-[12rem]">
          <span className="text-2xl font-bold">∞</span>
          <br />
          Possibilities
        </div>
      </div>
    </main>
  );
};

export default HomePage;
