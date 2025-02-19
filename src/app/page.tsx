import Link from "next/link"
export default function Home(){
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
     </nav>
      <h1 className="text-slate-50 text-8xl justify-center font-bold px-[384px]">This is Header Section..</h1>
    </div>
  )
}