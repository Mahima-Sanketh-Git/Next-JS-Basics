import Link from "next/link";
export default function Home() {
  return (
    <main className=" px-8">
      <section className=" w-full p-4 ">
        <nav>
          <ul className=" flex justify-between flex-1 ">
            <li><Link className="hover:text-blue-400" href="/">Home</Link></li>
            <li><Link className="hover:text-blue-400" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-blue-400" href="/about">About</Link></li>
            <li><Link className="hover:text-blue-400" href="/services">Services</Link></li>
            <li><Link className="hover:text-blue-400" href="/products/vege">Products Vege</Link></li>
          </ul>
        </nav>

      
      </section>
      <Link className=" py-48 px-4" href='https://nextjs.org/docs' target="_blank">Go to Next js Docs</Link>
    </main>
  );
}
