/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";

import { Hero } from "components/ui/common";
import { List } from "components/ui/course";
import { BaseLayout } from "components/ui/layout";
import getAllProducts from "content/products/fetcher";
import { useWeb3 } from "components/providers";

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
const Home = ({ products }) => {
  const { web3, isLoading } = useWeb3();
  console.log(web3);
  return (
    <div>
      {isLoading
        ? "Is loading web3..."
        : web3
        ? "Web3 is ready"
        : "Please install MetaMask"}
      <Hero />
      <List products={products} />
    </div>
  );
};

Home.Layout = BaseLayout;

Home.getInitialProps = async () => {
  const { data } = getAllProducts();
  return { products: data };
};

Home.propTypes = propTypes;
Home.defaultProps = {
  products: [],
};
export default Home;
