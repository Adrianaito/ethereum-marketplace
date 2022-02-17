import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Button = ({ children, className, ...rest }) => (
  <span
    {...rest}
    role="button"
    tabIndex={0}
    className={`px-8 py-3 border text-base rounded-md font-medium ${className} cursor-pointer`}
  >
    {children}
  </span>
);
Button.propTypes = propTypes;
Button.defaultProps = {
  className: "text-white bg-indigo-600 hover:bg-indigo-700",
};
export default Button;
