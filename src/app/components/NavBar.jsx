"use client";
import Link from "next/link";

const myRoutes = [
  {
    button: "Examen Final",
    route: "/",
  },
  {
    button: "Card Generator",
    route: "/one",
  },
  {
    button: "Digital Clock",
    route: "/two",
  },
  {
    button: "Drilling Info",
    route: "/three",
  },
  {
    button: "Galería de Cartas",
    route: "/four",
  },
  // {
  //   button: "Five",
  //   route: "/five",
  // },
  // {
  //   button: "Six",
  //   route: "/six",
  // },
  // {
  //   button: "Seven",
  //   route: "/seven",
  // },
  // {
  //   button: "Eight",
  //   route: "/eight",
  // },
  // {
  //   button: "Nine",
  //   route: "/nine",
  // },
  // {
  //   button: "Ten",
  //   route: "/ten",
  // },
];
export function NavBar() {
  return (
    <div className="flex float-left bg-orange-600 py-10 h-full">
      <div className="flex flex-col justify-around items-center gap-4">
        {myRoutes.map(({ button, route }) => (
          <button
            className="px-4 rounded border-8 border-b-amber-200 border-t-amber-200 bg-orange-600 text-black border-l-0 border-r-0"
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
