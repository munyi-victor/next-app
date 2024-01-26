import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full flex-col pt-2 pl-10 justify-between shadow-lg min-h-12">
      <div className="flex gap-4">
        <Link
          href="/"
          className="bg-light text-black text-lg font-bold font-satoshi rounded-full"
        >
          Home
        </Link>
        <Link
          href="/create"
          className="bg-light text-black text-lg font-bold font-satoshi rounded-full"
        >
          Create
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
