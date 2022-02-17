import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Button = ({ children, className, ...rest }) => (
  <button
    {...rest}
    type="button"
    className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border text-base rounded-md font-medium ${className}`}
  >
    {children}
  </button>
);
Button.propTypes = propTypes;
Button.defaultProps = {
  className: "text-white bg-indigo-600 hover:bg-indigo-700",
};
export default Button;
