"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    }
  ];

  const handleClick = () => {
    router.push("/Store");
  };

  return (
    <div className="p-4 border-2 m-4">
      <nav>
        <ul className="flex gap-4 items-center">
          {navs.map((item) => (
            <li key={item.link}> 
              <Link
                className={
                  item.link === pathname
                    ? "text-blue-400 font-bold"
                    : "text-violet-600"
                }
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <button
            onClick={handleClick}
            className="p-2 bg-green-500 rounded-md"
          >
            Go to Store
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;