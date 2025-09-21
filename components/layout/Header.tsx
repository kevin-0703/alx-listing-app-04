import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <a className="font-bold text-xl">ALX Listings</a>
              </Link>
              <nav className="hidden md:flex gap-3 text-sm text-gray-600">
                <a className="hover:underline" href="#">
                  Rooms
                </a>
                <a className="hover:underline" href="#">
                  Mansion
                </a>
                <a className="hover:underline" href="#">
                  Countryside
                </a>
                <a className="hover:underline" href="#">
                  Villas
                </a>
              </nav>
            </div>

            <div className="flex-1 mx-6 hidden md:block">
              <div className="relative">
                <input
                  className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Search city, state or property"
                  aria-label="Search"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="#">
                <a className="px-3 py-1 rounded-md border text-sm">Sign in</a>
              </Link>
              <Link href="#">
                <a className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">
                  Sign up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
