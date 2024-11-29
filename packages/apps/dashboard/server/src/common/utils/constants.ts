import { ChainId } from '@human-protocol/sdk';

export enum AllowedNetworksId {
  MAINNET = ChainId.MAINNET,
  BSC_MAINNET = ChainId.BSC_MAINNET,
  BSC_TESTNET = ChainId.BSC_TESTNET,
  POLYGON = ChainId.POLYGON,
}

export const LOCALHOST_CHAIN_IDS = [ChainId.LOCALHOST];

export const TESTNET_CHAIN_IDS = [
  ChainId.BSC_TESTNET,
  ChainId.POLYGON_AMOY,
  ChainId.SEPOLIA,
  ChainId.XLAYER_TESTNET,
];
export const MAINNET_CHAIN_IDS = [
  ChainId.MAINNET,
  ChainId.BSC_MAINNET,
  ChainId.POLYGON,
  ChainId.MOONBEAM,
];
