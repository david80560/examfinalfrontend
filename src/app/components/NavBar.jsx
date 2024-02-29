
"use client";
import Link from "next/link";

const myRoutes = [
  {
    button: "Home",
    route: "/",
  },
  {
    button: "One",
    route: "/one",
  },
  {
    button: "Two",
    route: "/two",
  },
  {
    button: "Three",
    route: "/three",
  },
  {
    button: "Four",
    route: "/four",
  },
  {
    button: "Five",
    route: "/five",
  },
  {
    button: "Six",
    route: "/six",
  },
  {
    button: "Seven",
    route: "/seven",
  },
  {
    button: "Eight",
    route: "/eight",
  },
  {
    button: "Nine",
    route: "/nine",
  },
  {
    button: "Ten",
    route: "/ten",
  },
];
export function NavBar() {
  return (
    <div className="flex bg-orange-600 py-3 px-10 w-full justify-around">

      <div className="flex gap-4">
        {myRoutes.map(({ button, route }) => (
          <button
            className="flex px-4 rounded border-8 border-b-amber-200 border-t-amber-200 bg-orange-600 text-black border-l-0 border-r-0"
            key={route}
          >
            <Link href={route}>{button}</Link>
          </button>
        ))}
      </div>

    </div>
  );
}
export default NavBar;