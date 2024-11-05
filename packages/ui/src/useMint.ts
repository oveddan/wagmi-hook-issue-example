import { useChainId } from "wagmi";
export const useMint = () => {
  const chainId = useChainId();

  return chainId;
};
