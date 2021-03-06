import React from "react";
import Link from "next/link";

import { useWeb3 } from "components/providers";
import { Button } from "components/ui/common";

const Navbar = () => {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
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
            <div className="flex items-center">
              <Link href="/">
                <p className="font-medium mr-8 text-gray-500 hover:text-gray-900 cursor-pointer">
                  Wishlist
                </p>
              </Link>
              {isLoading ? (
                <Button onClick={connect} disabled>
                  Loading...
                </Button>
              ) : isWeb3Loaded ? (
                <Button onClick={connect}>Connect</Button>
              ) : (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download/", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
