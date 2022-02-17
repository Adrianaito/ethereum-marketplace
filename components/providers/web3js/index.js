import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import PropTypes from "prop-types";

import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Web3Context = createContext(null);

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        setWeb3Api({
          provider,
          web3,
          contract: null,
          isLoading: false,
        });
      } else {
        setWeb3Api((api) => ({ ...api, isLoading: false }));
        console.error("Please install MetaMask");
      }
    };
    loadProvider();
  }, []);

  const _web3Api = useMemo(
    () => ({
      ...web3Api,
      isWeb3Loaded: web3Api.web3 !== null,
      connect: web3Api.provider
        ? async () => {
            try {
              // opens the Metamask
              await web3Api.provider
                .request({ method: "eth_requestAccounts" })
                .then((res) => console.log(res));
            } catch {
              window.location.reload();
            }
          }
        : () => console.error("Please install MetaMask"),
    }),
    [web3Api]
  );

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}

Web3Provider.propTypes = propTypes;
