import Link from "next/link";
export default function Hero(){
    return(
        <div className="h-screen bg-cyan-600">
            <nav className="w-full  p-4 text-white space-x-12">
            <Link href="/" className="hover:text-slate-50 text-[24px]">
        Home
      </Link>
      <Link href="/Hero" className="hover:text-slate-50 text-[24px]">
        Hero
      </Link>
      <Link href="/Footer" className="hover:text-slate-50 text-[24px]">
        Footer
      </Link>
      <section className="flex items-center justify-center text-white text-[38px] font-bold p-[248px]">
      This is Hero Section...
    </section>
     </nav>

        </div>
    )
}