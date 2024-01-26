import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full flex-col pt-6 justify-between shadow-lg min-h-12">
      <Link href="/">Home</Link>
    </nav>
  );
};

export default Nav;
