import Link from "next/link";
import Article from "@/components/article";
import Image from "next/image";

export default function Home() {
  return (
    
    <div>
        <h1 className="flex items-end justify-center mt-40 text-5xl font-bold">Hallo Sayang</h1>
        <div className="flex items-end justify-center mt-12">
          <Article /> <br />
        </div>
        <div className="flex items-end justify-center mt-5">
          <Link href="/albums" className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Pergi Ke Moments
          </Link>
        </div>
      </div>

  );
}
