
export default function Home() {
  return (
    <main className=" px-8">
      <section className=" w-full p-4 ">
        <nav>
          <ul className=" flex justify-between flex-1 ">
            <li><a className=" hover:text-blue-400" href="/">Home</a></li>
            <li><a className=" hover:text-blue-400" href="/contact">Contact</a></li>
            <li><a className=" hover:text-blue-400" href="/about">About</a></li>
            <li><a className=" hover:text-blue-400" href="/services">Services</a></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
