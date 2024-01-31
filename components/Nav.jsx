import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full flex flex-row pt-2 pl-10 justify-around shadow-lg min-h-12">
      <div className="flex gap-4 mt-2">
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

      <div className="flex gap-4 mb-2">
        <Link
          href="/signup"
          className="
          bg-black
          hover:bg-gray-800
          text-white
          text-lg 
          font-bold
          font-satoshi
          px-4
          py-2
          rounded-full"
        >
          Sign up
        </Link>

        <Link
          href="/signin"
          className="
          bg-black 
          hover:bg-gray-500
          text-white
          text-lg font-bold
          font-satoshi
          px-6 
          py-2
          rounded-full"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
