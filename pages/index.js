import React from "react";
import PropTypes from "prop-types";

import { Hero } from "components/common";
import { List } from "components/course";
import { BaseLayout } from "components/layout";
import getAllProducts from "content/products/fetcher";

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
const Home = ({ products }) => (
  <div>
    <Hero />
    <List products={products} />
  </div>
);

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
