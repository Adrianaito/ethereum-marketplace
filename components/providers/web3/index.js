import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Web3Context = createContext(null);

export default function Web3Provider({ children }) {
  return (
    <Web3Context.Provider value={{ test: "hello" }}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}

Web3Provider.propTypes = propTypes;
