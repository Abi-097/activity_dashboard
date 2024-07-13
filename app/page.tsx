import Deals from "@/components/base_components/Deals";
import Main from "@/components/base_components/Main";
import Navbar from "@/components/base_components/Navbar";
import User from "@/components/base_components/User";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="h-screen flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-white p-4 border-slate-300 border-2">
            <User />
          </div>
          <div className="w-full md:w-2/4 bg-white p-4 border-slate-300 border-2">
            <Main />
          </div>
          <div className="w-full md:w-1/4 bg-white p-4 border-slate-300 border-2">
            <Deals />
          </div>
        </div>
      </div>
    </>
  );
}
