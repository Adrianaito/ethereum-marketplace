import React from "react";
import PropTypes from "prop-types";

import { Navbar, Footer } from "components/common";
import { List } from "components/course";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const BaseLayout = ({ children }) => (
  <div>
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <div className="fit">
        {children}
        <List />
      </div>
    </div>
    <Footer />
  </div>
);
BaseLayout.propTypes = propTypes;
export default BaseLayout;
