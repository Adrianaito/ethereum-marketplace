import React from "react";
import Link from "next/link";
import { useWeb3 } from "components/providers";

const Navbar = () => {
  const { connect, isLoading, web3 } = useWeb3();
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div className="flex">
              <Link href="/">
                <p className="font-medium mr-8 text-gray-500 hover:text-gray-900 cursor-pointer">
                  Home
                </p>
              </Link>
              <Link href="/">
                <p className="font-medium mr-8 text-gray-500 hover:text-gray-900 cursor-pointer">
                  Marketplace
                </p>
              </Link>
              <Link href="/">
                <p className="font-medium mr-8 text-gray-500 hover:text-gray-900 cursor-pointer">
                  Blogs
                </p>
              </Link>
            </div>
            <div className="flex">
              <Link href="/">
                <p className="font-medium mr-8 text-gray-500 hover:text-gray-900 cursor-pointer">
                  Wishlist
                </p>
              </Link>
              {!isLoading && web3 ? (
                <span
                  onClick={() => connect()}
                  onKeyUp={connect}
                  role="button"
                  tabIndex={0}
                  className="px-8 py-3 border text-base rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                >
                  Connect
                </span>
              ) : (
                <span
                  onClick={() => connect()}
                  onKeyUp={connect}
                  role="button"
                  tabIndex={0}
                  className="px-8 py-3 border text-base rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                >
                  Install Metamask
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
