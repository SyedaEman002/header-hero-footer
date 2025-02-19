import Link from "next/link"
export default function Footer(){
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
     <footer className="absolute bottom-0 w-full text-white text-center py-4 text-8xl font-bold">
      This is Footer Section...
    </footer>
      
        </div>
    )
}