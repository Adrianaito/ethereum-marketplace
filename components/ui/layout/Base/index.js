import React from "react";
import PropTypes from "prop-types";

import { Navbar, Footer } from "components/ui/common";
import { List } from "components/ui/course";
import { Web3Provider } from "components/providers";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const BaseLayout = ({ children }) => (
  <Web3Provider>
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <div className="fit">
        {children}
        <List />
      </div>
    </div>
    <Footer />
  </Web3Provider>
);
BaseLayout.propTypes = propTypes;
export default BaseLayout;
